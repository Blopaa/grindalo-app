import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';
import SpotCardMolecule from '../../components/molecules/spotCard';
import NavigationOrganism from '../../components/organims/navigation';
import { AuthContext } from '../../contexts';
import { getSpots } from '../../services/spot';

interface spot {
  id: number;
  imgs: string[];
  title: string;
  description: string;
  coords: string[];
}

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

  const getAllSpots = async () => {
    const spots = await getSpots(state.token);
    if (spots?.data) {
      setData(spots?.data);
    }
  };

  useEffect(() => {
    getAllSpots();
  }, [])

  return (
    <Home>
      <NavigationOrganism {...props} />
      <main>
        {data.map((e: spot) => (
          <SpotCardMolecule
            id={e.id}
            name={e.title}
            imgurl="https://lh3.googleusercontent.com/proxy/qI0RlJiKsxldKVYrkyIIMDTRf-sDrizTAOicggwnIP038ZpPI-9wTkg3SziFU22b8fi0V6hEr--2_9Oip_DTKGDPB_cdR0qMn4_HzB385_bfruPCWCq8mgaN8r8ISt6oVho3dX1KhoNFWq0sEL_RA6DRQKJSgwnPavTUysrCUMN9rBCQib0lkEeeoM_CiQh9FuGrFr_UpodWCNC5MsATwNnbWUCR1WJ8Elk79bKbjuvEvdY14cMgoKPzxOCT"
            key={e.id}
          ></SpotCardMolecule>
        ))}
      </main>
    </Home>
  );
};

export default HomePage;
