import { NavBaseProps } from 'atoms/NavBase';
import { TypographyProps } from 'atoms/Typography';

export type LinkProps = {
  color?: 'white' | 'black' | 'blue' | 'gray' | string;
  variant?: 'solid' | 'simple' | string;
  hasArrow?: boolean;
  noHover?: boolean;
} & NavBaseProps &
  TypographyProps;

export type Link = {
  label: string;
} & LinkProps;
