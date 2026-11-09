import type { ReactNode } from "react";
import Link from "next/link";
import { KoodalLockup } from "@/components/ui/KoodalLockup";
import { Footer } from "@/components/sections/Footer";
import { LEGAL } from "@/lib/legal";

// Shared shell for /privacy and /terms: a plain header back to the landing
// page, readable prose, and the same footer as the home page.
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-275 items-center justify-between gap-4 px-5 py-3">
          <Link href="/" aria-label="KOODAL home" className="flex text-ink hover:text-ink">
            <KoodalLockup size={30} />
          </Link>
          <Link href="/" className="text-[15px] font-medium text-ink hover:text-accent">
            ← Back to home
          </Link>
        </nav>
      </header>
      <main className="mx-auto flex w-full max-w-275 flex-1 flex-col px-5">
        <article className="mx-auto w-full max-w-180 pt-10 leading-relaxed [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">{title}</h1>
          <p className="text-sm text-muted">
            Effective date: {LEGAL.effectiveDate} · Version {LEGAL.version}
          </p>
          {children}
        </article>
        <Footer />
      </main>
    </>
  );
}

export function LegalTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-md border border-border bg-surface">
      <table className="w-full text-left text-[15px]">
        <thead className="bg-background text-muted">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-2.5 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GrievanceOfficer() {
  return (
    <LegalTable
      head={["Detail", "Value"]}
      rows={[
        ["Name", LEGAL.grievanceOfficer.name],
        ["Email", <a key="e" href={`mailto:${LEGAL.grievanceOfficer.email}`}>{LEGAL.grievanceOfficer.email}</a>],
        ["Address", LEGAL.grievanceOfficer.address],
        ["Hours", LEGAL.grievanceOfficer.hours],
      ]}
    />
  );
}
