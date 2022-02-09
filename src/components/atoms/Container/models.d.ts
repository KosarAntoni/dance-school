import { ElementType, RefObject } from 'react';

export type ContainerProps = {
  as?: ElementType;
  className?: string;
  innerClassName?: string;
  gutter?: boolean;
  variant?: 'wide' | 'fluid' | string;
  innerRef?: RefObject;
};
