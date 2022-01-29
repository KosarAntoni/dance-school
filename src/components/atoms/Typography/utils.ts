import {
  Align,
  AlignBreakpoints,
  Padding,
  PaddingBreakpoints,
  PaddingBreakpointsPosition,
  PaddingPosition,
  Size,
  SizeBreakpoints,
} from './models.d';

export const sizeClassNames = (size: Size | SizeBreakpoints): string[] => {
  switch (typeof size) {
    case 'number': {
      return [`typography--size-${size}`];
    }
    case 'object': {
      if (Array.isArray(size) || !(size as SizeBreakpoints).base) return [];

      return Object.entries(size).map(([breakpoint, value]): string =>
        breakpoint === 'base'
          ? `typography--size-${value}`
          : `typography--size-${breakpoint}-${value}`
      );
    }
    default:
      return [];
  }
};

export const alignClassNames = (align: Align | AlignBreakpoints): string[] => {
  switch (typeof align) {
    case 'string': {
      return [`typography--align-${align}`];
    }
    case 'object': {
      if (Array.isArray(align) || !(align as AlignBreakpoints).base) return [];

      return Object.entries(align).map(([breakpoint, value]): string =>
        breakpoint === 'base'
          ? `typography--align-${value}`
          : `typography--align-${breakpoint}-${value}`
      );
    }
    default:
      return [];
  }
};

export const paddingClassNames = (
  padding: Padding | PaddingPosition | PaddingBreakpointsPosition
): string[] => {
  switch (typeof padding) {
    case 'string': {
      return [`typography--padding-${padding}`];
    }
    case 'object': {
      if (Array.isArray(padding)) return [];

      return (
        Object.entries(padding)
          // key can be side or breakpoint
          .map(([key, value]) => {
            switch (typeof value) {
              case 'string': {
                return key === 'base'
                  ? `typography--padding-${value}`
                  : `typography--padding-${key}-${value}`;
              }
              case 'object': {
                if (Array.isArray(value) || !(value as PaddingBreakpoints).base) return '';

                return Object.entries(value!).map(([breakpoint, breakpointValue]) =>
                  breakpoint === 'base'
                    ? `typography--padding-${key}-${breakpointValue}`
                    : `typography--padding-${key}-${breakpoint}-${breakpointValue}`
                );
              }
              default:
                return '';
            }
          })
          .flat()
      );
    }
    default:
      return [];
  }
};
