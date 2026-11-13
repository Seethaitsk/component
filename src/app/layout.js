import { Suspense } from "react";
import "./globals.css";
import PortalShell from "@/components/portal/PortalShell";

export const metadata = {
  title: "SysCorp UI Portal | Internal Engineering Library",
  description: "Internal design system and reusable component catalog across web platforms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
          <PortalShell>{children}</PortalShell>
        </Suspense>
      </body>
    </html>
  );
}
