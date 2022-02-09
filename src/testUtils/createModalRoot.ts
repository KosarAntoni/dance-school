export const createModalRoot = (): void => {
  // add a div with #modal-root id to the global body
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  const body = global.document.querySelector('body');
  if (body) body.appendChild(modalRoot);
};
