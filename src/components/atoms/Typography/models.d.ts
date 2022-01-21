type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type LineHeight = 'small' | 'normal' | 'big';

type FontWeight = 'light' | 'bold' | 'black' | string;

type Component = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';

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
interface SizeBreakpoints extends Partial<Record<Breakpoints, Size>> {
  base: Size;
}

type Position = 'top' | 'right' | 'bottom' | 'left';
type Padding = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'huge';
interface PaddingPosition extends Partial<Record<Position, Padding>> {}
interface PaddingBreakpoints extends Partial<Record<Breakpoints, Padding>> {
  base: Padding;
}
interface PaddingBreakpointsPosition extends Partial<Record<Position, PaddingBreakpoints>> {}

type Align = 'inherit' | 'left' | 'center' | 'right';
interface AlignBreakpoints extends Partial<Record<Breakpoints, Align>> {
  base: Align;
}

export interface TypographyProps {
  size?: Size | SizeBreakpoints;
  padding?: Padding | PaddingPosition | PaddingBreakpointsPosition;
  align?: Align | AlignBreakpoints;
  as?: Component;
  className?: string;
  lineHeight?: LineHeight;
  weight?: FontWeight;
  italic?: boolean;
  dangerouslySetInnerHTML?: string;
}
