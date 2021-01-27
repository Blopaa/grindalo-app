import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';
import { spot } from '../../../@types/types';
import NotSpotFoundMolecule from '../../components/molecules/noSpotFound';
import SpotCardMolecule from '../../components/molecules/spotCard';
import NavigationOrganism from '../../components/organims/navigation';
import { AuthContext } from '../../contexts';
import { getSpots } from '../../services/spot';

const Home = styled.div`
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  main {
    overflow-y: scroll;
  }
`;

const HomePage: React.FC<any> = (props) => {
  const [data, setData] = useState([]);
  const { state } = useContext(AuthContext);

  
  useEffect(() => {
    const getAllSpots = async () => {
      const spots = await getSpots(state.token);
      if (spots?.data) {
        setData(spots?.data);
      }
    };
    getAllSpots();
  }, [state.token])

  return (
    <Home>
      <NavigationOrganism {...props} />
      <main>
        {data.length > 0 ? data.map((e: spot) => (
          <SpotCardMolecule
            id={e.id}
            name={e.title}
            imgurl={e.imgs[0]}
            key={e.id}
          ></SpotCardMolecule>
        )) : <NotSpotFoundMolecule/>}
      </main>
    </Home>
  );
};

export default HomePage;
