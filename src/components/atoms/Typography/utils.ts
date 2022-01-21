import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

import {
  Align,
  AlignBreakpoints,
  Padding,
  PaddingBreakpointsPosition,
  PaddingPosition,
  Size,
  SizeBreakpoints,
} from './models.d';

export const sizeClassNames = (size: Size | SizeBreakpoints): string[] => {
  if (isNumber(size)) {
    return [`typography--size-${size}`];
  }
  if (isPlainObject(size) && size.base) {
    return Object.entries(size).map(([breakpoint, value]): string =>
      breakpoint === 'base'
        ? `typography--size-${value}`
        : `typography--size-${breakpoint}-${value}`
    );
  }

  return [];
};

export const alignClassNames = (align: Align | AlignBreakpoints): string[] => {
  if (isString(align)) {
    return [`typography--align-${align}`];
  }
  if (isPlainObject(align) && align.base) {
    return Object.entries(align).map(([breakpoint, value]): string =>
      breakpoint === 'base'
        ? `typography--align-${value}`
        : `typography--align-${breakpoint}-${value}`
    );
  }

  return [];
};

export const paddingClassNames = (
  padding: Padding | PaddingPosition | PaddingBreakpointsPosition
): string[] => {
  const paddingPositions: string[] = ['top', 'right', 'bottom', 'left'];

  if (isString(padding)) {
    return paddingPositions.map((position): string => `typography--padding-${position}-${padding}`);
  }
  if (isPlainObject(padding)) {
    return Object.entries(padding)
      .map(([side, value]) => {
        if (isString(value)) {
          return `typography--padding-${side}-${value}`;
        }
        if (isPlainObject(value) && value.base) {
          return Object.entries(value).map(([breakpoint, paddingValue]) =>
            breakpoint === 'base'
              ? `typography--padding-${side}-${paddingValue}`
              : `typography--padding-${side}-${breakpoint}-${paddingValue}`
          );
        }

        return '';
      })
      .flat();
  }

  return [];
};
