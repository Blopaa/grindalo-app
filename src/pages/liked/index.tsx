import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';
import LoadingAtom from '../../components/atoms/loading';
import NotSpotFoundMolecule from '../../components/molecules/noSpotFound';
import LikedSpotsGridOrganism from '../../components/organims/likedSpotsGrid';
import NavigationOrganism from '../../components/organims/navigation';
import { AuthContext } from '../../contexts';
import { getUserLikedSpots } from '../../services/user';

const Liked = styled.div`
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  main {
    overflow-y: scroll;
    height: calc(100% - 3.125rem);
  }
`;

const LikedPage: React.FC<any> = (props) => {
  const [data, setData] = useState([]);
  const { state } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAllSpots = async () => {
      const spots = await getUserLikedSpots(state.token);
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
    <Liked>
      <NavigationOrganism {...props} />
      {loading ? (
          <LoadingAtom />
      ) : (
        <main>
          {!error ? (
            <LikedSpotsGridOrganism components={data}/>
          ) : (
            <NotSpotFoundMolecule />
          )}
        </main>
      )}
    </Liked>
  );
};

export default LikedPage;
