import styled from '@emotion/styled';
import React, { useState } from 'react';
import Sidebar from '../../components/molecules';

const Home = styled.div`
  height: 100%;
  display: flex;
`;

const HomePage: React.FC<any> = (props) => {

    const [show, setShow] = useState(true)

  return (
    <Home>
      {/* <NavlinkAtom href="/home" {...props}>home</NavlinkAtom>
            <NavlinkAtom href="/about" {...props}>about</NavlinkAtom> */}
      <Sidebar history={props.history} show={show} setShow={setShow}/>
      <main>
        <button>hi</button>
      </main>
    </Home>
  );
};

export default HomePage;
