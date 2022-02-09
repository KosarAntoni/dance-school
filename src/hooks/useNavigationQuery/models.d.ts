import { Button } from 'atoms/Button';
import { Link } from 'atoms/Link';

import { locales, pageUrl } from 'types/commonTypes';

export type navigationQueryType = {
  locale: locales;
  pages: pageUrl[];
  logoLink: Link;
  menuButton: Button;
};
