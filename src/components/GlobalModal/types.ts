export interface ModalConfig {
  title: string;
  message: string;
  buttons: ButtonConfig[];
}

export interface ButtonConfig {
  text: string;
  type: "primary" | "default";
  onClick: () => void;
}
