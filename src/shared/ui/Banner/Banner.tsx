import { Link } from 'react-router-dom';
import s from './Banner.module.scss';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Button, type VariantBtn } from '@/shared/ui/Button';
import { Breadcrumbs, type BreadcrumbItem } from '@/shared/ui/BreadCrumbs';
import { Text } from '../Text';

export type BannerLink = {
  to: string;
  linkName: string;
  btnVariant?: VariantBtn;
};

export type BannerProps = {
  bannerTitle: string;
  breadcrumbs?: BreadcrumbItem[];
  links?: BannerLink[];
  className?: string;
  contentClassName?: string;
  children: ReactNode;
  image?: ReactNode;
  imageClassName?: string;
};

export const Banner = ({
  className,
  links,
  breadcrumbs,
  bannerTitle,
  contentClassName,
  image,
  imageClassName,
  children,
}: BannerProps) => {
  return (
    <section className={clsx(s.banner, className)}>
      <div className="container">
        <div className={s.bannerWrapper}>
          {breadcrumbs && (
            <Breadcrumbs className={s.bannerBreadcrumbs} items={breadcrumbs} />
          )}
          <div className={clsx(contentClassName, s.bannerContent)}>
            <Text as={'h2'} variant="h2" className={s.bannerTitle}>
              {bannerTitle}
            </Text>
            <Text className={s.bannerDescription}>{children}</Text>
            {links && (
              <div
                className={clsx(
                  links.length === 1
                    ? s.bannerLinksSingle
                    : s.bannerLinksMultiple,
                )}
              >
                {links.map(({ to, linkName, btnVariant }) => (
                  <Button
                    key={to}
                    {...(btnVariant && { variant: btnVariant })}
                    asChild
                  >
                    <Link to={to} className={s.bannerLink}>
                      {linkName}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
            {image && (
              <div className={clsx(s.bannerImage, imageClassName)}>{image}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
