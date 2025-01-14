"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface childType {
  children: ReactNode;
}

const Provider = ({ children }: childType) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
