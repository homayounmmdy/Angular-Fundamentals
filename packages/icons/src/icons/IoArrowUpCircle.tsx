import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const IoArrowUpCircle: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className = '',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      stroke={color}
      fill={color}
      strokeWidth="0"
      className={className}
      {...props}
    >
      <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm80.09 224L272 208.42V358h-32V208.42L175.91 272l-22.54-22.7L256 147.46 358.63 249.3z" />
    </svg>
  );
};