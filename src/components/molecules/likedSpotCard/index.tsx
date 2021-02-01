import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

type LikepSpotCardProps = {
  image: string;
  title: string;
  id: number;
};

const LikedSpotCard = styled.div`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 11.25rem;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    object-fit: cover;
  }
  p {
    width: 100%;
    min-height: 2rem;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LikedSpotCardMolecule: React.FC<LikepSpotCardProps> = ({
  image,
  title,
  id,
}) => {
  return (
    <Link to={`/home/${id}`}>
        <LikedSpotCard>
      <img src={image} alt="spotImage" />
      <p>{title}</p>
    </LikedSpotCard>
    </Link>
  );
};

export default LikedSpotCardMolecule;
