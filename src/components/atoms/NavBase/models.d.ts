type NavBaseStringNodes = 'url' | 'queryString' | 'className' | 'ariaLabel';

export type NavBaseProps = {
  onClick?: () => void;
} & Partial<Record<NavBaseStringNodes, string>>;
