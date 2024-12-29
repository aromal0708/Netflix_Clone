import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "./Components";

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Netflix Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
