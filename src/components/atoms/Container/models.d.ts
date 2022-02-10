import { ElementType, RefObject } from 'react';

export type ContainerProps = {
  as?: ElementType;
  className?: string;
  outerClassName?: string;
  gutter?: boolean;
  variant?: 'wide' | 'fluid' | string;
  innerRef?: RefObject;
};
