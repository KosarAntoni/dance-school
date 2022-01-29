export const typographyDefaultClassesMock = [
  'testClass',
  'typography--size-8',
  'typography--padding-xl',
  'typography--line-height-big',
  'typography--align-center',
  'typography--italic',
  'typography--bold',
];

export const typographyExtendedClassesMock = [
  'testClass',
  'typography--size-8',
  'typography--size-xs-10',
  'typography--size-sm-12',
  'typography--size-md-14',
  'typography--size-lg-16',
  'typography--size-xl-18',
  'typography--size-xxl-20',
  'typography--padding-top-sm',
  'typography--padding-right-md',
  'typography--padding-bottom-lg',
  'typography--padding-left-xl',
  'typography--align-center',
  'typography--align-sm-left',
  'typography--align-md-right',
  'typography--align-xl-inherit',
  'typography--line-height-small',
  'typography--light',
  'typography--italic',
];

export const TypographyDefaultPropsMock = {
  as: 'h1',
  className: 'testClass',
  align: 'center',
  padding: 'xl',
  lineHeight: 'big',
  weight: 'bold',
  italic: true,
  size: 8,
};

export const TypographyExtendedPropsMock = {
  as: 'p',
  className: 'testClass',
  align: { base: 'center', sm: 'left', md: 'right', xl: 'inherit' },
  padding: { top: 'sm', right: 'md', bottom: 'lg', left: 'xl' },
  lineHeight: 'small',
  weight: 'light',
  italic: true,
  size: { base: 8, xs: 10, sm: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
};

export const TypographyChildrenMock = 'Test Lorem Ipsum';
