import { createContext } from "react";

interface ContextType {
  isFiltersModal: boolean;
  setIsFiltersModal: (filtersModal: boolean) => void;
  showFiltersModalHandler: () => void;
}

const StateContext = createContext<null | ContextType>(null);

export default StateContext;
