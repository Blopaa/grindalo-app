import styled from '@emotion/styled';
import React from 'react';
import NavigationOrganism from '../../components/organims/navigation';

const Home = styled.div`
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
`;

const HomePage: React.FC<any> = (props) => {
  return (
    <Home>
      {/* <NavlinkAtom href="/home" {...props}>home</NavlinkAtom>
            <NavlinkAtom href="/about" {...props}>about</NavlinkAtom> */}
      <NavigationOrganism {...props} />
      <main>

      </main>
    </Home>
  );
};

export default HomePage;
