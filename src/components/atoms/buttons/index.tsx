import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  buttonDesign: 'outline' | 'fill';
  buttonType?: 'button' | 'submit' | 'reset';
  bgColor: string;
  fColor: string;
  children?: React.ReactChild;
  width: string;
  height: string;
  border: string;
  href?: string;
};

const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  font-family: sans-serif;
  transition: all 0.3s;
  background-color: ${({ buttonDesign, bgColor }) =>
    buttonDesign === 'fill' ? bgColor : 'transparent'};
  outline: none;
  border: ${({ bgColor, buttonDesign, border }) =>
    buttonDesign === 'outline' ? `${border} solid ${bgColor}` : 'none'};
  color: ${({ fColor, buttonDesign, bgColor }) =>
    buttonDesign === 'outline' ? bgColor : fColor};
  cursor: pointer;
  ${({ width, height }) => ({
    width: width,
    height: height,
  })}
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme, buttonDesign, bgColor }) =>
      buttonDesign === 'fill' ? theme.colors.secondary.light : bgColor};
    color: ${({ fColor, buttonDesign }) =>
      buttonDesign === 'outline' ? fColor : fColor};
  }
`;

const ButtonAtom: React.FC<ButtonProps> = ({
  buttonDesign,
  buttonType = 'button',
  bgColor,
  children,
  fColor,
  width,
  height,
  border,
  href,
}) => {
  return (
    <>
      {href ? (
        <Link to={href}>
          <Button
            type={buttonType}
            buttonDesign={buttonDesign}
            bgColor={bgColor}
            fColor={fColor}
            width={width}
            height={height}
            border={border}
          >
            {children}
          </Button>
        </Link>
      ) : (
        <Button
          type={buttonType}
          buttonDesign={buttonDesign}
          bgColor={bgColor}
          fColor={fColor}
          width={width}
          height={height}
          border={border}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default ButtonAtom;
