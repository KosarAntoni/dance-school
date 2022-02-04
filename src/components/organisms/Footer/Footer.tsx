import React, { FC } from 'react';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';

import Container from 'atoms/Container';
import Link from 'atoms/Link';
import Typography from 'atoms/Typography';

import { useFooterQuery } from 'hooks/useFooterQuery';

import { socialLinkTheme } from 'types/commonTypes.d';

import './Footer.scss';

const { FACEBOOK, INSTAGRAM, YOUTUBE } = socialLinkTheme;

const Footer = () => {
  const nodes = useFooterQuery();
  const lang = process.env.GATSBY_DEFAULT_LANG;
  const [footerData] = nodes.filter(({ locale }) => locale === lang);
  const { copyright, pages, socialLinks } = footerData;

  const renderLinks = pages?.map(({ url, title }) => (
    <Link key={title} url={url} color="gray" size={{ base: 14, md: 20 }}>
      {title}
    </Link>
  ));

  const renderSocialLinks = socialLinks?.map(({ url, label, theme }) => {
    const returnIcon = (): JSX.Element | string => {
      switch (theme) {
        case FACEBOOK: {
          return <FaFacebookF />;
        }
        case INSTAGRAM: {
          return <FaInstagram />;
        }
        case YOUTUBE: {
          return <FaYoutube />;
        }
        default:
          return label;
      }
    };

    return (
      <Link key={label} url={url} color="gray" size={24} ariaLabel={label}>
        {returnIcon()}
      </Link>
    );
  });

  return (
    <Container
      as="footer"
      variant="fluid"
      className="footer background--almost-black"
      data-testid="footer-item"
    >
      <div className="footer__links">{renderLinks}</div>
      <div className="footer__social-links">{renderSocialLinks}</div>
      <Typography size={{ base: 12, md: 18 }} className="color--gray">
        &copy; {copyright}
      </Typography>
    </Container>
  );
};

export default Footer;
