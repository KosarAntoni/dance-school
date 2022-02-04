import { locales, pageUrl, socialLink } from 'types/commonTypes';

export interface footerQueryType {
  locale: locales;
  pages: pageUrl[];
  socialLinks: socialLink[];
  copyright: string;
}
