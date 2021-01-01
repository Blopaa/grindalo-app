import styled from '@emotion/styled';
import { IonItem } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  buttonType: 'outline' | 'fill';
  bgColor: string;
  fColor: string;
  children?: React.ReactChild;
  width: string;
  height: string;
  border: string;
  href?: string;
};

const Button = styled.button<ButtonProps>`
  transition: all 0.3s;
  background-color: ${({ buttonType, bgColor }) =>
    buttonType === 'fill' ? bgColor : 'transparent'};
  outline: none;
  border: ${({ bgColor, buttonType, border }) =>
    buttonType === 'outline' ? `${border} solid ${bgColor}` : 'none'};
  color: ${({ fColor, buttonType, bgColor }) =>
    buttonType === 'outline' ? bgColor : fColor};
  cursor: pointer;
  ${({ width, height }) => ({
    width: width,
    height: height,
  })}
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme, buttonType, bgColor }) =>
      buttonType === 'fill' ? theme.colors.secondary.light : bgColor};
    color: ${({ fColor, buttonType }) =>
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
  border,
  href,
}) => {
  return (
    <>
      {href ? (
        <Link to={href}>
          <Button
            buttonType={buttonType}
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
          buttonType={buttonType}
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
