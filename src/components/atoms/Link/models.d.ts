import { NavBaseProps } from 'atoms/NavBase';
import { TypographyProps } from 'atoms/Typography';

export interface LinkProps extends NavBaseProps, TypographyProps {
  color?: 'white' | 'black' | 'blue' | 'gray' | string;
  variant?: 'solid' | 'simple' | string;
  hasArrow?: boolean;
}
