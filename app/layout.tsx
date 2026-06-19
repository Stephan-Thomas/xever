import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephan | Full-stack Developer",
  description:
    "Portfolio website for Stephan, a full-stack web and mobile developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
