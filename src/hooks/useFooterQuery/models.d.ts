import { locales, pageUrl, socialLink } from 'shared/types/commonTypes';

export type footerQueryType = {
  locale: locales;
  pages: pageUrl[];
  socialLinks: socialLink[];
  copyright: string;
};
