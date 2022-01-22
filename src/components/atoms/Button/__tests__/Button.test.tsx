import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import {
  ButtonChildrenMock,
  buttonDefaultClassesMock,
  ButtonDefaultPropsMock,
  testFunction,
} from '../__mock__/mock';
import Button from '../Button';

import { ButtonProps } from '../models';

const defaultProps: ButtonProps = {
  ...ButtonDefaultPropsMock,
};

test('the Button component renders correctly with required and optional props', () => {
  render(<Button {...defaultProps}>{ButtonChildrenMock}</Button>);

  const buttonNode = screen.getByRole('button');

  // the component has been rendered
  expect(buttonNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(buttonNode).toMatchSnapshot();

  // after click right function is called
  fireEvent.click(buttonNode);
  expect(testFunction).toBeCalled();

  // the comonent has correct classes
  expect(buttonNode).toHaveClass(buttonDefaultClassesMock.join(' '));
});
