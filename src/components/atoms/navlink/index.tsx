import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

type navlinkProps = {
  href: string;
  children?: React.ReactChild;
  history: any;
};

const StyledLink = styled.div<navlinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.secondary.base};
  background-color: ${({ history, href, theme }) =>
    history.location.pathname === href ? theme.colors.gray : 'transparent'};
  width: 100%;
  height: 3.125rem;
`;

const NavlinkAtom: React.FC<navlinkProps> = ({ href, children, history }) => {
  return (
    <Link to={href}>
      <StyledLink history={history} href={href}>
        {children}
      </StyledLink>
    </Link>
  );
};

export default NavlinkAtom;
