import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "./Components";
import { Toaster } from "react-hot-toast";
import Provider from "../Providers";
import { LoadingProvider } from "@/contexts/LoadingContext";

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
      <body className="scrollbar-hide">
        <Provider>
          <LoadingProvider>
            <div className="min-h-screen w-full scrollbar scrollbar-hide ">
              <header>
                <Navbar />
              </header>
              <main>{children}</main>
              <Toaster
                position="top-center"
                toastOptions={{ duration: 1500 }}
              />
            </div>
          </LoadingProvider>
        </Provider>
      </body>
    </html>
  );
}
