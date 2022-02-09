import { LinkProps } from 'atoms/Link';

export type LogoProps = {
  label: string;
  hasText?: boolean;
  className?: string;
} & LinkProps;
