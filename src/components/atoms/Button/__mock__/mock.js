export const testFunction = jest.fn();

export const buttonDefaultClassesMock = [
  'button',
  'button--dark-green',
  'button--solid',
  'test-class',
];

export const ButtonDefaultPropsMock = {
  onClick: testFunction,
  className: 'test-class',
  variant: 'solid',
  color: 'dark-green',
  size: 20,
};

export const ButtonChildrenMock = 'test content';
