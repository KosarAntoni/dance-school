import { NavBaseProps } from 'atoms/NavBase';
import { TypographyProps } from 'atoms/Typography';

export interface ButtonProps extends NavBaseProps, TypographyProps {
  variant: 'outline' | 'solid' | 'simple' | string;
  space?: 'around' | 'between' | string;
  color?: 'white' | 'dark-green' | 'transparent' | string;
  disabled?: boolean;
}