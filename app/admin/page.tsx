import type { Metadata } from "next";
import { AdminSubmissions } from "@/components/admin/AdminSubmissions";

// Never indexed — this page is only ever reached by typing the URL directly,
// there's no link to it anywhere on the public site.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminSubmissions />;
}
