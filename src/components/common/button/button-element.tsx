"use client";
import { Button } from '@mui/material';
import React from 'react';

export interface ButtonElementInterface {
  id?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
  text?: string;
  width?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode; // Icon to show with the button
  onClick?: () => void;
  disabled?: boolean;
  iconRight?: boolean; // Determines if the icon is on the right
  customClass?: string; // Custom class for styling
  sx?: object; // ✅ New prop for custom sx styles

}

const ButtonElement: React.FC<Readonly<ButtonElementInterface>> = ({
  id,
  size = 'large',
  variant = 'contained',
  text = 'Button',
  width = 'auto',
  type = 'button',
  icon,
  onClick,
  disabled = false,
  iconRight = false,
  customClass = '',
  sx = {}, // Default empty object
}) => {
  return (
    <Button
      id={id}
      type={type}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={customClass}
      sx={{
        width: width, // Allows custom width
        display: 'flex',
        justifyContent: iconRight ? 'space-between' : 'center',
        alignItems: 'center',
        textTransform: 'none', // Prevents uppercase text
        ...sx, // ✅ Allow extra sx styles
      }}
      startIcon={!iconRight && icon} // Icon on the left
      endIcon={iconRight && icon} // Icon on the right
    >
      {text}
    </Button>
  );
};

export default ButtonElement;
