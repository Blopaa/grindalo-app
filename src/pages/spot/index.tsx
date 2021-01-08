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

interface SpotPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Spot = styled.div`
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  color: ${({ theme }) => theme.colors.secondary.base};

  h2 {
    width: calc(100% - 1rem);
    padding-left: 1rem;
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

const SpotPage: React.FC<SpotPageProps> = ({ match }) => {
  const [spot, setspot] = useState<spot>({
    title: '',
    description: '',
    coords: [],
    id: 0,
    imgs: [],
  });

  const { state } = useContext(AuthContext);

  useEffect(() => {
    const abortController = new AbortController();

    const getSpot = async () => {
      const spot = await getSpotById(state.token, match.params.id);
      if (spot?.data) {
        setspot(spot.data);
      }
    };
    getSpot();

    return () => {
      abortController.abort();
    };
  }, [match.params.id, state.token]);

  return (
    <Spot>
      <Link to="/home" style={{paddingLeft: '1rem', fontSize: '2rem'}}>
        <FaArrowLeft></FaArrowLeft>
      </Link>
      <MainImg src={spot.imgs[0]} alt="main image" />
      <h2>{spot.title}</h2>
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
  );
};

export default SpotPage;
