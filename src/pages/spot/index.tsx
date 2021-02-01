import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { spot } from '../../../@types/types';
import ButtonAtom from '../../components/atoms/buttons';
import { AuthContext } from '../../contexts';
import { getSpotById } from '../../services/spot';
import { FaArrowLeft } from 'react-icons/fa';
import { ReactComponent as Lemon } from '../../assets/icons/lemon.svg';
import { getLikedPost, giveLike } from '../../services/user';
import LoadingAtom from '../../components/atoms/loading';

interface SpotPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

type styleProps = {
  isLiked: boolean;
};

const Spot = styled.div`
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  color: ${({ theme }) => theme.colors.secondary.base};

  h2 {
    font-size: 2rem;
    font-family: sans-serif;
    text-align: left;
  }
  p {
    width: calc(100% - 1rem);
    padding-left: 1rem;
    font-size: 1rem;
    font-family: sans-serif;
    text-align: left;
  }
`;

const MainImg = styled.img`
  width: calc(100% - 2rem);
  padding: 1rem 1rem 0 1rem;
  border-radius: 10%;
`;

const Header = styled.div<styleProps>`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  svg {
    color: ${({ isLiked, theme }) =>
      isLiked ? theme.colors.primary : theme.colors.white};
    stroke: ${({ isLiked, theme }) =>
      !isLiked ? theme.colors.secondary.base : theme.colors.white};
    transition: all 0.2s;
  }
`;

const SpotPage: React.FC<SpotPageProps> = ({ match }) => {
  const [spot, setspot] = useState<spot>({
    title: '',
    description: '',
    coords: [],
    id: 0,
    imgs: [],
  });

  const { state } = useContext(AuthContext);
  const [likedOnes, setLikedOnes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getSpot = async () => {
      const spot = await getSpotById(state.token, match.params.id);
      if (spot?.data) {
        setspot(spot.data);
        setLoading(false);
      }
    };
    getSpot();

    return () => {
      abortController.abort();
    };
  }, [match.params.id, state.token]);

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
      if (e.id === parseInt(match.params.id)) {
        setIsLiked(true);
      }
    });
  }, [likedOnes, match.params.id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    giveLike(parseInt(match.params.id), state.token);
  };

  return (
    <>
      {loading ? (
        <LoadingAtom />
      ) : (
        <Spot>
          <Link
            to="/home"
            style={{ paddingLeft: '1rem', fontSize: '2rem', color: '#303030' }}
          >
            <FaArrowLeft></FaArrowLeft>
          </Link>
          <MainImg src={spot.imgs[0]} alt="main image" />
          <Header isLiked={isLiked}>
            <h2>{spot.title}</h2> <Lemon onClick={handleLike} />
          </Header>
          <p>{spot.description}</p>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              padding: '1rem 0',
            }}
          >
            <ButtonAtom
              buttonType="button"
              border="5px"
              href="#"
              bgColor="#303030"
              fColor="#FCC21B"
              buttonDesign="outline"
              width="15rem"
              height="5rem"
            >
              ¿Donde esta este spot?
            </ButtonAtom>
          </div>
          {spot.imgs.map((e, i) => (
            <img width="100%" src={e} alt="spot Img" key={i} />
          ))}
        </Spot>
      )}
    </>
  );
};

export default SpotPage;
