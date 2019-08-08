import React from 'react';
import { ContextActions } from './types';

export type GlobalFormAction =
    | {
          type: ContextActions.SetAmount;
          form: { amount: number };
      }
    | {
          type: ContextActions.SetName;
          form: { name: string };
      };

export type FormAction = React.Dispatch<GlobalFormAction>;
