"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};
