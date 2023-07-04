import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: React.MouseEventHandler;
  isSubmitting?: boolean;
  type?: 'button' | 'submit';
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  title,
  bgColor,
  handleClick,
  isSubmitting,
  leftIcon,
  rightIcon,
  textColor,
  type,
}: Props) => {
  return (
    <button
      type={type || 'button'}
      disabled={isSubmitting}
      className={`flexCenter gap-3 px-4 py-3
      ${textColor || 'text-white'}
      ${isSubmitting ? 'bg-black/50' : bgColor || 'bg-primary-purple'}
       rounded-xl text-sm font-medium max-md:w-full`}
      onClick={handleClick}
    >
      {leftIcon && (
        <Image
          src={leftIcon}
          width={14}
          height={14}
          alt="Left icon of the button"
        />
      )}
      {title}
      {rightIcon && (
        <Image
          src={rightIcon}
          width={14}
          height={14}
          alt="Left icon of the button"
        />
      )}
    </button>
  );
};

export default Button;
