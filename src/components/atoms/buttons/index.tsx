import styled from '@emotion/styled';
import React from 'react';

type ButtonProps = {
  buttonType: 'outline' | 'fill';
  bgColor?: string;
  fColor?: string;
  children?: React.ReactChild;
  width: string;
  height: string;
};

const Button = styled.button<ButtonProps>`
  transition: all 0.3s;
  background-color: ${({ buttonType, bgColor }) =>
    buttonType === 'fill' ? bgColor : 'transparent'};
  outline: none;
  border: ${({ bgColor, buttonType }) =>
    buttonType === 'outline' ? `4px solid ${bgColor}` : 'none'};
  color: ${({ fColor, buttonType, bgColor }) =>
    buttonType === 'outline' ? bgColor : fColor};
  cursor: pointer;
  ${({ width, height }) => ({
    width: width,
    height: height,
  })}
  border-radius: 10px;
  &:hover{
    background-color: ${({ theme, buttonType, bgColor }) =>
      buttonType === 'fill' ? theme.colors.secondary.light : bgColor};
    color: ${({ fColor, buttonType, bgColor }) =>
      buttonType === 'outline' ? fColor : fColor};
  }
`;

const ButtonAtom: React.FC<ButtonProps> = ({
  buttonType,
  bgColor,
  children,
  fColor,
  width,
  height,
}) => {
  return (
    <Button
      buttonType={buttonType}
      bgColor={bgColor}
      fColor={fColor}
      width={width}
      height={height}
    >
      {children}
    </Button>
  );
};

export default ButtonAtom;
