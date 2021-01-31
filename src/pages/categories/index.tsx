import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { spot } from '../../../@types/types';
import LoadingAtom from '../../components/atoms/loading';
import NotSpotFoundMolecule from '../../components/molecules/noSpotFound';
import SpotCardMolecule from '../../components/molecules/spotCard';
import NavigationOrganism from '../../components/organims/navigation';
import { AuthContext } from '../../contexts';
import { getSpotByCategories } from '../../services/spot';

interface CategoriePageProps
  extends RouteComponentProps<{
    categorie: string;
  }> {}

const Categorie = styled.div`
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  main {
    overflow-y: scroll;
    height: calc(100% - 3.125rem);
  }
`;

const CategoriePage: React.FC<CategoriePageProps> = ({ match, history }) => {
  const [data, setData] = useState([]);
  const { state } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAllSpots = async () => {
      const spots = await getSpotByCategories(
        state.token,
        match.params.categorie
      );
      if (spots?.data) {
        setError(false);
        setData(spots?.data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    };
    getAllSpots();
  }, [state.token, match.params]);

  return (
    <Categorie>
      <NavigationOrganism history={history} />
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
    </Categorie>
  );
};

export default CategoriePage;
