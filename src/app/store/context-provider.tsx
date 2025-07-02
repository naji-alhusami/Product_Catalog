"use client";
import { useState } from "react";
import StateContext from "./state-context";

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [isFiltersModal, setIsFiltersModal] = useState<boolean>(false);
  function showFiltersModalHandler() {
    setIsFiltersModal(!isFiltersModal);
  }

  const value = {
    isFiltersModal,
    setIsFiltersModal,
    showFiltersModalHandler,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default ContextProvider;
