import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ladd & Co. — Advisory and Execution",
  description:
    "Advisory and execution for families, principals, and private institutions with interests that demand discretion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}