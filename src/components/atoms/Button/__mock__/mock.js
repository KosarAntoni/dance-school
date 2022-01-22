export const testFunction = jest.fn();

export const buttonDefaultClassesMock = ['button', 'button--solid-blue', 'test-class'];

export const ButtonDefaultPropsMock = {
  onClick: testFunction,
  className: 'test-class',
  variant: 'solid',
  color: 'blue',
  size: 20,
};

export const ButtonChildrenMock = 'test content';
