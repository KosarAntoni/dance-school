export interface ModalProps {
  isOpen?: boolean;
  ref?: RefObject<HTMLElement>;
}
export interface ModalSetters extends HTMLElement {
  open: () => void;
  close: () => void;
}
