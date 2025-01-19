import React from "react";
import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";
import Provider from "../Providers";
import { LoadingProvider } from "@/contexts/LoadingContext";

export const metadata = {
  title: "Authentication",
  description: "Authenticaiton Page for Netflix Clone",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="scrollbar-hide">
        <Provider>
          <LoadingProvider>
            <main>
              <Toaster
                position="top-center"
                toastOptions={{ duration: 1500 }}
              />
            </main>
          </LoadingProvider>
        </Provider>
      </body>
    </html>
  );
}
