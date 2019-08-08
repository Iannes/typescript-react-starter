import { GlobalFormAction, FormAction } from "./actions";

export type TextProps = { titleText: string; variant?: string };
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type KeyboardEvent = React.KeyboardEvent<HTMLDivElement>;
export type ContextChildren = React.FC<React.ReactNode>;
export type Children = JSX.Element[] | JSX.Element;
export type LayoutChildren = React.FC<React.ReactNode>;

export enum ContextActions {
  SetName,
  SetAmount
}

export type RowProps = {
  rowKeyName: string;
  rowAlternativeTitle?: string;
  hideTitle?: boolean;
  children?: Children;
};

export type FormValues = {
  amount: number;
  name: string;
};

export type GlobalFormState = {
  form: FormValues;
};

export type PreventKeyDown = (
  e: KeyboardEvent,
  rowKeyName: string,
  stateValue: string,
  dispatch: FormAction
) => void;

export type GlobalFormDispatch = (action: GlobalFormAction) => void;
