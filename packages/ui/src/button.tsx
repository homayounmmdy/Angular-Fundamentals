import React from 'react';

type AllowedColors = 
  | 'primary' | 'secondary' | 'accent' | 'neutral' 
  | 'info' | 'success' | 'warning' | 'error' 
  | 'ghost' | 'link' | 'null';

export type ButtonType = {
   /**
    * Predefined button color style.
    */
   color?: `btn-${AllowedColors}` | null;

   /**
    * Content to render inside the button (text, icons, etc.).
    */
   children: React.ReactNode;

   /**
    * If true, skips the default btn and color utility classes.
    * @default false
    */
   removeDefaultStyle?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * A customizable button component powered by DaisyUI.
 */
const Button: React.FC<ButtonType> = ({
   children,
   color = 'btn-primary',
   className = '',
   removeDefaultStyle = false,
   ...rest
}) => {
   const colorClass = color && color !== 'btn-null' ? color : '';
   
   const finalClassName = removeDefaultStyle
      ? className
      : `btn ${colorClass} ${className}`.trim();

   return (
      <button className={finalClassName} {...rest}>
         {children}
      </button>
   );
};

export default Button;