import React from "react";
import "../globals.css";
import Navbar from "./Components/Navbar";

export const metadata = {
  title: "Authentication",
  description: "Authenticaiton Page for Netflix Clone",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
