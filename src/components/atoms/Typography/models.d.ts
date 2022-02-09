import { ElementType } from 'react';

type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type LineHeight = 'small' | 'normal' | 'big';

type FontWeight = 'light' | 'bold' | 'black' | string;

type Size =
  | 8
  | 10
  | 12
  | 14
  | 15
  | 16
  | 17
  | 18
  | 20
  | 24
  | 25
  | 28
  | 30
  | 35
  | 40
  | 42
  | 50
  | 55
  | 65
  | number;
type SizeBreakpoints = {
  base: Size;
} & Partial<Record<Breakpoints, Size>>;

type Position = 'top' | 'right' | 'bottom' | 'left';
type Padding = 'unset' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'huge';
type PaddingPosition = Partial<Record<Position, Padding>>;
type PaddingBreakpoints = {
  base: Padding;
} & Partial<Record<Breakpoints, Padding>>;
type PaddingBreakpointsPosition = Partial<Record<Position, PaddingBreakpoints>>;

type Align = 'inherit' | 'left' | 'center' | 'right';
type AlignBreakpoints = {
  base: Align;
} & Partial<Record<Breakpoints, Align>>;

export type TypographyProps = {
  size?: Size | SizeBreakpoints;
  padding?: Padding | PaddingPosition | PaddingBreakpointsPosition;
  align?: Align | AlignBreakpoints;
  as?: ElementType;
  className?: string;
  lineHeight?: LineHeight;
  weight?: FontWeight;
  italic?: boolean;
  dangerouslySetInnerHTML?: string;
};
