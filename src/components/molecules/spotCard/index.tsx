import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Lemon } from '../../../assets/icons/lemon.svg';
import { AuthContext } from '../../../contexts';
import { getLikedPost, giveLike } from '../../../services/user/index';

type spotCardProps = {
  name: string | number;
  imgurl: string;
  id: number;
};

type styleProps = {
  isLiked: boolean;
};

interface spot {
  id: number;
  imgs: string[];
  title: string;
  description: string;
  coords: string[];
}

const SpotCard = styled.div<styleProps>`
  cursor: pointer;
  font-family: sans-serif;
  overflow: hidden;
  margin: 1rem;
  width: calc(100% - 2rem);
  background-color: ${({ theme }) => theme.colors.secondary.base};
  color: ${({ theme }) => theme.colors.white};
  height: 10.625rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    font-weight: bold;

    svg {
      color: ${({ isLiked, theme }) =>
        isLiked ? theme.colors.primary : theme.colors.white};
      transition: ease-out 0.1s;
    }
  }
`;

const MainImg = styled.img`
  object-fit: cover;
  height: 6.875rem;
  width: calc(100%-2rem);
`;

const SpotCardMolecule: React.FC<spotCardProps> = ({ name, imgurl, id }) => {
  const [isliked, setIsLiked] = useState(false);
  const [likedOnes, setLikedOnes] = useState([]);

  const { state } = useContext(AuthContext);

  useEffect(() => {
    const getLiked = async () => {
      const liked = await getLikedPost(state.token);
      if (liked?.data) {
        setLikedOnes(liked.data);
      } else {
        console.log(liked?.message);
      }
    };
    getLiked();
  }, [state.token]);

  useEffect(() => {
    likedOnes.forEach((e: spot) => {
      if (e.id === id) {
        setIsLiked(true);
      }
    });
  }, [likedOnes, id]);

  const handleLike = () => {
    setIsLiked(!isliked);
    giveLike(id, state.token);
  };

  return (
    <Link to={`/home/${id}`}>
      <SpotCard isLiked={isliked}>
      <MainImg src={imgurl} alt="main image" />
      <div>
        <p>{name}</p>
        <Lemon onClick={handleLike} />
      </div>
    </SpotCard>
    </Link>
  );
};

export default SpotCardMolecule;
