import React from "react";
import { ReactNode } from "react";
import { TodoProvider } from "./TodoContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <TodoProvider>{children}</TodoProvider>;
};
