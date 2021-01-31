import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';
import { spot } from '../../../@types/types';
import LoadingAtom from '../../components/atoms/loading';
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
    height: calc(100% - 3.125rem);
  }
`;

const HomePage: React.FC<any> = (props) => {
  const [data, setData] = useState([]);
  const { state } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAllSpots = async () => {
      const spots = await getSpots(state.token);
      if (spots?.data) {
        setLoading(false);
        setError(false);
        setData(spots?.data);
      } else {
        setLoading(false);
        setError(true);
      }
    };
    getAllSpots();
  }, [state.token]);

  return (
    <Home>
      <NavigationOrganism {...props} />
      {loading ? (
          <LoadingAtom />
      ) : (
        <main>
          {!error ? (
            data.map((e: spot) => (
              <SpotCardMolecule
                id={e.id}
                name={e.title}
                imgurl={e.imgs[0]}
                key={e.id}
              ></SpotCardMolecule>
            ))
          ) : (
            <NotSpotFoundMolecule />
          )}
        </main>
      )}
    </Home>
  );
};

export default HomePage;
