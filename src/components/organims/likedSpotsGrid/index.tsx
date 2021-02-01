import styled from '@emotion/styled';
import React from 'react';
import LikedSpotCardMolecule from '../../molecules/likedSpotCard';
import { spot } from '../../../../@types/types';

const LikedSpotsGrid = styled.div`
  display: grid;
  width: calc(100%-3px);
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row dense;
  grid-gap: 1px;
  padding: 1px;
`;

const LikedSpotsGridOrganism: React.FC<{components: spot[]}> = ({components}) => {
  return <LikedSpotsGrid>{components.map((e: spot) => (
      <LikedSpotCardMolecule key={e.id} id={e.id} image={e.imgs[0]} title={e.title}/>
  ))}</LikedSpotsGrid>;
};

export default LikedSpotsGridOrganism;
