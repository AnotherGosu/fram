"use client";

import { type ReactNode, createContext, useRef } from "react";

import { type Store, createGlobalStore } from "./store";

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreContext = createContext<Store | null>(null);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef(createGlobalStore());

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};
