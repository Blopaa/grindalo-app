import styled from '@emotion/styled';
import React, { useState } from 'react';
import NavlinkAtom from '../../atoms/navlink';
import { AiFillCaretDown } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { keyframes } from '@emotion/react';

type sidebarProps = {
  show: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  history?: History;
  isShow?: boolean;
};

const Sidebar = styled.aside<sidebarProps>`
  z-index: 11;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary.base};
  }
  box-shadow: 5px 0px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  left: ${({ show }) => (!show ? 'calc(1rem - 75%)' : '0px')};
  background-color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  width: calc((75% - 1rem) - 5px);
  color: #303030;
  font-family: sans-serif;
  font-weight: bold;
  transition: all ease-in-out 0.4s;
  opacity: ${({ show }) => (!show ? '0' : '1')};
  ul li {
    list-style: none;
  }
  ul li ul {
    transition: all 0.7s;
    display: ${({ isShow }) => (isShow ? 'block' : 'none')};
    list-style: none;
  }

  ul li ul li {
    text-align: left;
    transition: 0.2s all;
    &:hover {
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
      background-color: ${({ theme }) => theme.colors.gray};
    }
  }

  ul li div p {
    text-align: left;
    display: flex;
    align-items: center;
    height: 3.125rem;
    transition: all 0.3s;
    padding-left: 1rem;
  }

  ul li .categories {
    box-shadow: ${({ isShow }) =>
      isShow ? '0px 3px 4px rgba(0, 0, 0, 0.25)' : 'none'};
    background-color: ${({ isShow, theme }) =>
      isShow ? theme.colors.gray : 'none'};
  }

  .arrow {
    transition: 0.2s all;
    transform: rotate(${({ isShow }) => (isShow ? `180deg` : '0deg')});
  }
`;

const Background = styled.div<sidebarProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: ${({show}) => !show ? "none" : "block"};
`

const Cross = styled.button`
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.secondary.base};
`;

const SidebarMolecule: React.FC<sidebarProps> = ({
  show,
  history,
  setShow,
}) => {
  const [isShow, setIsShow] = useState(false);

  const handleInputSidebar = () => {
    if (!setShow) throw new Error('no setShow');
    setShow(false);
  };

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <Background show={show} onClick={handleInputSidebar}></Background>
      <Sidebar show={show} isShow={isShow}>
        <ul>
          <Cross onClick={handleInputSidebar}>
            <ImCross></ImCross>
          </Cross>
          <li style={{ textAlign: 'left' }}>
            <NavlinkAtom href="/home" history={history}>
              <div style={{ width: '100%' }}>
                <p style={{ width: '100%' }}>Home</p>
              </div>
            </NavlinkAtom>
          </li>
          <li onClick={handleShow}>
            <div className="categories">
              <p>
                Spots{' '}
                <span className="arrow">
                  <AiFillCaretDown></AiFillCaretDown>
                </span>
              </p>
            </div>
            <ul>
              <li>
                <NavlinkAtom
                  href="/spots/grind"
                  history={history}
                  onClick={handleInputSidebar}
                >
                  Grinds
                </NavlinkAtom>
              </li>
              <li>
                <NavlinkAtom
                  href="/spots/escaleras"
                  history={history}
                  onClick={handleInputSidebar}
                >
                  Escaleras
                </NavlinkAtom>
              </li>
              <li>
                <NavlinkAtom
                  href="/spots/flat"
                  history={history}
                  onClick={handleInputSidebar}
                >
                  Flat tricks
                </NavlinkAtom>
              </li>
              <li>
                <NavlinkAtom
                  href="/spots/cruising"
                  history={history}
                  onClick={handleInputSidebar}
                >
                  Just cruising
                </NavlinkAtom>
              </li>
            </ul>
          </li>
        </ul>
      </Sidebar>
    </>
  );
};

export default SidebarMolecule;
