export type BadgeProps = {
  variant?: 'arrow' | 'nono' | 'translucent' | string;
  color?: 'green' | 'blue' | 'orange' | 'white' | string;
  className?: string;
};

export type Badge = {
  label: string;
} & BadgeProps;
