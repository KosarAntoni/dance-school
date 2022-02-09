import { LinkProps } from 'atoms/Link';

type LogoBooleanProps = 'hasText' | 'hasIcon';

export type LogoProps = {
  label: string;
  className?: string;
} & LinkProps &
  Partial<Record<LogoBooleanProps, boolean | undefined>>;
