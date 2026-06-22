import type { Metadata } from "next";
import "@/styles/common.css";

export const metadata: Metadata = {
  title: "CodeAcademia – Learn to Code, Build the Web",
  description:
    "The fastest way to learn HTML, CSS, JavaScript, Python, SQL and more — with interactive examples you can edit right in your browser.",
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
