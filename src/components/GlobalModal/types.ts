import { ReactNode } from 'react';

export interface ModalConfig {
  title: string;
  message: string | ReactNode;
  buttons: ButtonConfig[];
}

export interface ButtonConfig {
  text: string;
  type: "primary" | "default";
  onClick: () => void;
}
