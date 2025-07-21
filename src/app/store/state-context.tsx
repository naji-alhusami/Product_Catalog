import { createContext } from "react";

export interface SelectedFiltersType {
  brands: string[];
  classes: string[];
  types: string[];
}

interface ContextType {
  isFiltersModal: boolean;
  setIsFiltersModal: (filtersModal: boolean) => void;
  showFiltersModalHandler: () => void;
  selectedFilters: SelectedFiltersType;
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFiltersType>>;
}

const StateContext = createContext<null | ContextType>(null);

export default StateContext;
