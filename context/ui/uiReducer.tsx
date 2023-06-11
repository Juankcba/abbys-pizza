import { UiState } from ".";

type UiActionType = {
  type: "[Ui] - Change State";
  payload: boolean;
};

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[Ui] - Change State":
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};
