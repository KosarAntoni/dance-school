type NavBaseStringNodes = 'url' | 'queryString' | 'className' | 'ariaLabel';

export interface NavBaseProps extends Partial<Record<NavBaseStringNodes, string>> {
  onClick?: () => void;
}
