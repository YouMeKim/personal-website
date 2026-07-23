import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/chrome";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = { title: { default: "Yumi Kim | Software Engineer", template: "%s | Yumi Kim" }, description: "NYC-based software engineer building thoughtful, scalable software." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider><Header /><main className="mx-auto min-h-[75vh] max-w-6xl px-6 py-14">{children}</main><Footer /></ThemeProvider></body></html>;
}
