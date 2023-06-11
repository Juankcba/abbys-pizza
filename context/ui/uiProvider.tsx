import { UiContext, uiReducer } from "./";
import { FC } from "react";
import { PropsWithChildren } from "react";
import { useReducer } from "react";

export interface UiState {
  isOpen: boolean;
}
const UI_INITIAL_STATE: UiState = {
  isOpen: false,
};

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const openCart = (newState: boolean) => {
    dispatch({ type: "[Ui] - Change State", payload: newState });
  };
  return (
    <UiContext.Provider value={{ ...state, openCart }}>
      {children}
    </UiContext.Provider>
  );
};
