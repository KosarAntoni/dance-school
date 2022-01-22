import { NavBaseProps } from 'atoms/NavBase';
import { TypographyProps } from 'atoms/Typography';

export interface LinkProps extends NavBaseProps, TypographyProps {
  color?: 'white' | 'black' | 'blue' | string;
  variant?: 'solid' | 'simple' | string;
  hasArrow?: boolean;
}
