import * as React from "react";
import { GlobalFormAction } from "../actions";

import {
  GlobalFormState,
  GlobalFormDispatch,
  ContextChildren,
  ContextActions,
  FormValues
} from "../types";

const FormState: FormValues = {
  amount: 0,
  name: ""
};

const InitialGlobalFormState: GlobalFormState = {
  form: FormState
};

const FormStateContext = React.createContext<GlobalFormState | undefined>(
  undefined
);
const FormDispatchContext = React.createContext<GlobalFormDispatch | undefined>(
  undefined
);

export function FormReducer(
  state: GlobalFormState,
  action: GlobalFormAction
): GlobalFormState {
  switch (action.type) {
    case ContextActions.SetAmount:
      return {
        ...state,
        form: { ...state.form, amount: action.form.amount }
      };
    case ContextActions.SetName:
      return {
        ...state,
        form: { ...state.form, name: action.form.name }
      };
    default:
      return state;
  }
}

const FormProvider: ContextChildren = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    FormReducer,
    InitialGlobalFormState
  );
  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  );
};

function useFormState() {
  const context = React.useContext(FormStateContext);
  if (context === undefined) {
    throw new Error("useFormState must be used within a FormProvider");
  }
  return context;
}

function useFormDispatch() {
  const context = React.useContext(FormDispatchContext);
  if (context === undefined) {
    throw new Error("useFormDispatch must be used within a FormProvider");
  }
  return context;
}

export { FormProvider, useFormState, useFormDispatch };
