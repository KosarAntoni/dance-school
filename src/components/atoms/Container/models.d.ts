import { ElementType, RefObject } from 'react';

export interface ContainerProps {
  as?: ElementType;
  className?: string;
  gutter?: boolean;
  variant?: 'wide' | 'fluid' | string;
  innerRef?: RefObject;
}
