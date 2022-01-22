import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from '@testing-library/react';

import { ModalSetters } from '..';
import Modal from '../Modal';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

const testModalCLose = (node: HTMLElement) => {
  // change class after click on background
  expect(node).toHaveClass('modal--fade-out');

  // after 0.45 second element is removed from DOM
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 600);
  act(() => {
    jest.advanceTimersByTime(600);
  });
  expect(node).not.toBeInTheDocument();
};

test('the Modal component renders correctly with required and optional props', () => {
  // add a div with #modal-root id to the global body
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  const body = global.document.querySelector('body');
  if (body) body.appendChild(modalRoot);

  // create element ref to test forwardRef hook
  const modalRef = React.createRef<ModalSetters>();

  render(
    <Modal ref={modalRef} isOpen>
      TEST TEXT
    </Modal>
  );

  let modalNode = screen.getByTestId('modal-item');

  // the component has been rendered
  expect(modalNode).toBeInTheDocument();

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(modalNode).toMatchSnapshot();

  // the component has content inside
  expect(screen.getByText('TEST TEXT')).toBeInTheDocument();

  // modal closes after click on background
  fireEvent.click(modalNode);
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
  fireEvent.keyDown(modalRoot, { key: 'Escape', keyCode: 27 });
  testModalCLose(modalNode);
});
