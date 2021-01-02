import styled from '@emotion/styled';
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import SidebarMolecule from '../../molecules';

const Navigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  width: calc(100% - 1rem);
  height: 3.125rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
`;

const Menu = styled.button`
display: flex;
align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 2.5rem;
  color: ${({theme}) => theme.colors.white}
`;

const NavigationOrganism: React.FC<any> = (props) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <SidebarMolecule history={props} show={show} setShow={setShow} />
      <Navigation>
        <Menu onClick={() => setShow(!show)}>
          <HiMenu></HiMenu>
        </Menu>
      </Navigation>
    </>
  );
};

export default NavigationOrganism;
