import { NavBaseProps } from 'atoms/NavBase';
import { TypographyProps } from 'atoms/Typography';

export type ButtonProps = {
  variant: 'outline' | 'solid' | 'simple' | string;
  space?: 'around' | 'between' | string;
  color?: 'white' | 'blue' | 'black' | 'transparent' | string;
  disabled?: boolean;
} & NavBaseProps &
  TypographyProps;

export type Button = {
  label: string;
} & ButtonProps;
