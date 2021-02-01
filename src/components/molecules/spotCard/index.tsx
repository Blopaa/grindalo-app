import styled from '@emotion/styled';
import React /*{ useContext, useEffect, useState }*/ from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Lemon } from '../../../assets/icons/lemon.svg';
// import { ReactComponent as LemonLiked } from '../../../assets/icons/grindaloLogo.svg';
// import { AuthContext } from '../../../contexts';
// import { getLikedPost, giveLike } from '../../../services/user/index';

type spotCardProps = {
  name: string | number;
  imgurl: string;
  id: number;
};

// type styleProps = {
//   isLiked: boolean;
// };

const SpotCard = styled.div`
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

  }
`;
/* svg {
  color: ${({ isLiked, theme }) => theme.colors.white};
  transition: ease-out 0.1s;
  width: 33px;
  height: 29px;
  font-size: 1rem;
} */

const MainImg = styled.img`
  object-fit: cover;
  height: 6.875rem;
  width: 100%;
`;

const SpotCardMolecule: React.FC<spotCardProps> = ({ name, imgurl, id }) => {
  // const [isliked, setIsLiked] = useState(false);
  // const [likedOnes, setLikedOnes] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const { state } = useContext(AuthContext);

  // useEffect(() => {
  //   const getLiked = async () => {
  //     const liked = await getLikedPost(state.token);
  //     if (liked?.data) {
  //       setLikedOnes(liked.data);
  //     } else {
  //       console.log(liked?.message);
  //     }
  //   };
  //   getLiked();
  // }, [state.token]);

  // useEffect(() => {
  //   if (likedOnes.find((e: spot) => e.id === id)) {
  //     setIsLiked(true);
  //   }
  //   setTimeout(()=>{
  //     setLoading(false);
  //   console.log('stoped');
  //   }, 250)
  // }, [likedOnes, id]);

  // const handleLike = () => {
  //   setIsLiked(!isliked);
  //   giveLike(id, state.token);
  // };

  return (
    <SpotCard>
      <Link to={`/home/${id}`}>
        <MainImg src={imgurl} alt="main image" />
      </Link>
      <div>
        <p>{name}</p>
        {/* {isliked ? (
              <LemonLiked onClick={handleLike} />
            ) : (
              <Lemon onClick={handleLike} />
            )} */}
      </div>
    </SpotCard>
  );
};

export default SpotCardMolecule;
