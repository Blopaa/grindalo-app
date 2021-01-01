import styled from '@emotion/styled';
import React from 'react';
import ButtonAtom from '../../atoms/buttons';

type AuthFooterProps = {
  linkMsg: string;
  msg: string
  href: string
};

const AuthFooter = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
      margin-right: 1rem
  }
  height: 3.125rem;
  font-family: sans-serif;
`;

const AuthFooterOrganism: React.FC<AuthFooterProps> = ({ linkMsg, msg, href }) => {
  return (
    <AuthFooter>
      <p>{msg}</p>
      <ButtonAtom
        border="1px"
        fColor="#303030"
        bgColor="#FCC21B"
        buttonType="outline"
        width="6.125rem"
        height="1.5rem"
        href={href}
      >
        {linkMsg}
      </ButtonAtom>
    </AuthFooter>
  );
};

export default AuthFooterOrganism;
