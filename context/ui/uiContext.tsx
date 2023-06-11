import { createContext } from "react";

interface ContextProps {
  isOpen: boolean;

  openCart: (newState: boolean) => void;
}

export const UiContext = createContext({} as ContextProps);
