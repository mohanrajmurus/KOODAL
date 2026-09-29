"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "koodal-admin-password";

interface SignupRow {
  id: string;
  created_at: string;
  name: string;
  whatsapp: string;
  area_pincode: string;
  email: string | null;
  activities: string[];
  intent: string;
  consent: boolean;
}

const COLUMNS: { key: keyof SignupRow; label: string }[] = [
  { key: "created_at", label: "Created at" },
  { key: "name", label: "Name" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "area_pincode", label: "Area / Pincode" },
  { key: "email", label: "Email" },
  { key: "activities", label: "Activities" },
  { key: "intent", label: "Intent" },
  { key: "consent", label: "Consent" },
];

function cellText(row: SignupRow, key: keyof SignupRow): string {
  const value = row[key];
  if (key === "created_at" && typeof value === "string") {
    return new Date(value).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
  }
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return value ?? "";
}

function toCsv(rows: SignupRow[]): string {
  const escape = (value: string) => `"${value.replace(/"/g, '""')}"`;
  const header = COLUMNS.map((c) => escape(c.label)).join(",");
  const lines = rows.map((row) => COLUMNS.map((c) => escape(cellText(row, c.key))).join(","));
  return [header, ...lines].join("\r\n");
}

function downloadCsv(rows: SignupRow[]): void {
  const csv = toCsv(rows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `koodal-signups-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export function AdminSubmissions() {
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [rows, setRows] = useState<SignupRow[] | null>(null);

  async function submitPassword(candidate: string) {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/admin/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: candidate }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setRows(data.data);
        try {
          sessionStorage.setItem(STORAGE_KEY, candidate);
        } catch {
          // sessionStorage can throw in private-browsing contexts — non-fatal, just re-prompts next time.
        }
      } else {
        setError(data.error ?? "Incorrect password.");
        try {
          sessionStorage.removeItem(STORAGE_KEY);
        } catch {
          // see above
        }
      }
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = sessionStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    // Deferred to a microtask so the state updates inside submitPassword
    // don't run synchronously within the effect body.
    if (stored) queueMicrotask(() => submitPassword(stored));
  }, []);

  if (rows) {
    return (
      <div className="mx-auto max-w-350 p-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3.5">
          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-ink">
            Signups ({rows.length})
          </h1>
          <button
            type="button"
            onClick={() => downloadCsv(rows)}
            className="min-h-11 rounded-full bg-ink px-5 text-[15px] font-bold text-primary hover:bg-teal"
          >
            Download CSV
          </button>
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-175 border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                {COLUMNS.map((col) => (
                  <th key={col.key} className="px-3.5 py-2.5 font-bold text-muted uppercase">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-border last:border-0">
                  {COLUMNS.map((col) => (
                    <td key={col.key} className="px-3.5 py-2.5 align-top text-ink">
                      {cellText(row, col.key)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-100 flex-col justify-center gap-4 p-5">
      <h1 className="font-heading text-2xl font-extrabold tracking-tight text-ink">KOODAL signups</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitPassword(password);
        }}
        className="flex flex-col gap-2.5"
      >
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={submitting}
          className="min-h-12 rounded-md border-2 border-border bg-surface px-4 text-[17px] text-ink outline-none focus:border-primary"
        />
        <button
          type="submit"
          disabled={submitting || !password}
          className="min-h-12 rounded-full bg-ink px-5 text-[15px] font-bold text-primary hover:bg-teal disabled:opacity-60"
        >
          {submitting ? "Checking…" : "Unlock"}
        </button>
        {error && (
          <p className="text-sm font-medium text-[#c9452a]" role="alert">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
