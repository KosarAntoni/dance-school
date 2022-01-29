import React from 'react';
import { render, screen } from '@testing-library/react';

import {
  TypographyChildrenMock,
  typographyDefaultClassesMock,
  TypographyDefaultPropsMock,
  typographyExtendedClassesMock,
  TypographyExtendedPropsMock,
} from '../__mock__/mock';
import Typography from '../Typography';

import { TypographyProps } from '../models.d';

const defaultProps: TypographyProps = {
  ...(TypographyDefaultPropsMock as TypographyProps),
};

const extendedProps: TypographyProps = {
  ...(TypographyExtendedPropsMock as TypographyProps),
};

it('Typography component renders correctly with required and optional props', () => {
  const { rerender } = render(<Typography {...defaultProps}>{TypographyChildrenMock}</Typography>);

  let typographyNode = screen.getByRole('heading');

  // the component has been rendered
  expect(typographyNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(typographyNode).toMatchSnapshot();

  // the component renders all classes
  expect(typographyNode).toHaveClass(typographyDefaultClassesMock.join(' '));

  rerender(<Typography {...extendedProps}>{TypographyChildrenMock}</Typography>);

  typographyNode = screen.getByTestId('typography-item');

  // the component renders all classes
  expect(typographyNode).toHaveClass(typographyExtendedClassesMock.join(' '));

  // it should not be present as heading when 'as' prop is provided as paragraph
  expect(screen.queryByRole('heading')).toBeNull();

  rerender(<Typography>{TypographyChildrenMock}</Typography>);

  typographyNode = screen.getByTestId('typography-item');

  // the component renders without classes
  expect(typographyNode).not.toHaveClass(typographyDefaultClassesMock.join(' '));
  expect(typographyNode).not.toHaveClass(typographyExtendedClassesMock.join(' '));
});
