import { locales, pageUrl } from 'shared/types/commonTypes';

import { Button } from 'atoms/Button';
import { Link } from 'atoms/Link';

export type navigationQueryType = {
  locale: locales;
  pages: pageUrl[];
  logoLink: Link;
  buttons: Button[];
  menuButton: Button;
};
