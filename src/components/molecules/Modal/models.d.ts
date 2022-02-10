export type ModalProps = {
  justify?: 'left' | 'center' | 'right' | string;
  align?: 'top' | 'center' | 'bottom' | string;
  className?: string;
  isOpen?: boolean;
  ref?: RefObject<HTMLElement>;
};

export type ModalSetters = {
  open: () => void;
  close: () => void;
} & HTMLElement;
