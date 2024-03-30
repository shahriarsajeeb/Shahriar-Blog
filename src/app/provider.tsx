"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return;
  }

  return <NextUIProvider>{children}</NextUIProvider>;
};
