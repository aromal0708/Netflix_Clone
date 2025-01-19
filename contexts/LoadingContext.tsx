"use client";
import { createContext, ReactNode, useState, useContext } from "react";
interface loadingContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoadingContext = createContext<loadingContextProps | undefined>(
  undefined
);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): loadingContextProps => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("The child must be within provider");
  }

  return context;
};
