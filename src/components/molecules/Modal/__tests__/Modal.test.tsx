import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from '@testing-library/react';
import { createModalRoot } from 'testUtils/createModalRoot';

import { ModalProps, ModalSetters } from '..';
import {
  ModalChildrenMock,
  ModalDefaultClassesMock,
  ModalDefaultPropsMock,
} from '../__mock__/mock';
import Modal from '../Modal';

const defaultProps: ModalProps = {
  ...ModalDefaultPropsMock,
};

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

afterEach(() => {
  jest.clearAllTimers();
});

export const testModalCLose = (node: HTMLElement): void => {
  // change class
  expect(node.parentElement).toHaveClass('modal--fade-out');

  // after 0.6 second element is removed from DOM
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 600);
  act(() => {
    jest.advanceTimersByTime(600);
  });
  expect(node).not.toBeInTheDocument();
};

test('the Modal component renders correctly with required and optional props', () => {
  createModalRoot();

  // create element ref to test forwardRef hook
  const modalRef = React.createRef<ModalSetters>();

  render(
    <Modal ref={modalRef} {...defaultProps}>
      {ModalChildrenMock}
    </Modal>
  );

  let modalNode = screen.getByTestId('modal-item');

  // the component has been rendered
  expect(modalNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(modalNode).toMatchSnapshot();

  // the component has content inside
  expect(screen.getByText(ModalChildrenMock)).toBeInTheDocument();

  // the component has right classes
  expect(modalNode).toHaveClass(ModalDefaultClassesMock.join(' '));

  // modal closes after click on background
  fireEvent.click(modalNode.parentElement!);
  testModalCLose(modalNode);

  // after ref call element is inside DOM
  act(() => {
    if (modalRef.current) modalRef.current.open();
  });

  modalNode = screen.getByTestId('modal-item');
  expect(modalNode).toBeInTheDocument();

  // modal closes after click on close button
  const closeButtonNode = screen.getByRole('button');
  fireEvent.click(closeButtonNode);

  testModalCLose(modalNode);

  // open modal for testing purposes
  act(() => {
    if (modalRef.current) modalRef.current.open();
  });

  // modal closes after press on Escape key
  fireEvent.keyDown(document, { key: 'Escape', keyCode: 27 });
  testModalCLose(modalNode);
});
