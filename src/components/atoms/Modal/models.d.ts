export type ModalProps = {
  isOpen?: boolean;
  ref?: RefObject<HTMLElement>;
};
export type ModalSetters = {
  open: () => void;
  close: () => void;
} & HTMLElement;
