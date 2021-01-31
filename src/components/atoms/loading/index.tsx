import styled from '@emotion/styled';
import React from 'react';

const Loading = styled.div`
  margin: 10px;
  width: 70px;
  min-width: 70px;
  height: 70px;
  min-height: 70px;
  border: 10px solid ${({ theme }) => theme.colors.secondary.base};
  border-radius: 50%;
  border-top: 10px solid ${({ theme }) => theme.colors.primary};
  animation-name: girar;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;

  @keyframes girar {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
`;

const LoadingAtom = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Loading></Loading>
    </div>
  );
};

export default LoadingAtom;
