export type locales = 'en' | 'pl';

export type pageUrl = Record<'url' | 'title' | 'slug', string>;

export enum socialLinkTheme {
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  YOUTUBE = 'YOUTUBE',
}

export type socialLink = UnionType<socialLinkTheme, Record<'url' | 'label', string>>;
