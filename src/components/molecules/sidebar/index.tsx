import styled from '@emotion/styled';
import React from 'react';
import NavlinkAtom from '../../atoms/navlink';
import { AiFillCaretDown } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { keyframes } from '@emotion/react';

type sidebarProps = {
  show: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  history?: History;
};

const rotate = keyframes`
    0%{
    transform: rotate(0deg);        } 
    100%{
    transform: rotate(180deg);   
    }

`;

const Sidebar = styled.aside<sidebarProps>`
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
  transition: ease-in-out 0.2s;

  ul li {
    list-style: none;
  }
  ul li ul {
    transition: all 0.7s;
    display: none;
    list-style: none;
  }
  ul li:focus,
  ul li:active,
  ul li:hover > ul {
    display: block;
  }

  ul li ul li {
    text-align: left;
  }

  ul li ul li {
    transition: 0.2s all;
  }

  ul li ul li:hover {
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.colors.gray};
  }

  ul li div p {
    text-align: left;
    display: flex;
    align-items: center;
    height: 3.125rem;
    transition: all 0.3s;
    padding-left: 1rem;
  }

  ul li:focus,
  ul li:hover > div {
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.colors.gray};
    p svg {
      animation: ease-in-out 0.2s forwards ${rotate};
    }
  }
`;

const Cross = styled.button`
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
`;

const SidebarMolecule: React.FC<sidebarProps> = ({
  show,
  history,
  setShow,
}) => {
  const handleInputSidebar = () => {
    if (!setShow) throw new Error('no setShow');
    setShow(false);
  };

  return (
    <Sidebar show={show}>
      <ul>
        <Cross onClick={handleInputSidebar}>
          <ImCross></ImCross>
        </Cross>
        <li style={{textAlign: 'left'}}>
          <NavlinkAtom href="/home" history={history}>
            <div  style={{width: '100%'}}>
              <p style={{width: '100%'}}>Home</p>
            </div>
          </NavlinkAtom>
        </li>
        <li>
          <div>
            <p>
              Spots <AiFillCaretDown></AiFillCaretDown>
            </p>
          </div>
          <ul>
            <li>
              <NavlinkAtom href="/spots/grind" history={history}>
                Grinds
              </NavlinkAtom>
            </li>
            <li>
              <NavlinkAtom href="/spots/escaleras" history={history}>
                Escaleras
              </NavlinkAtom>
            </li>
            <li>
              <NavlinkAtom href="/spots/flat" history={history}>
                Flat tricks
              </NavlinkAtom>
            </li>
            <li>
              <NavlinkAtom href="/spots/cruising" history={history}>
                Just cruising
              </NavlinkAtom>
            </li>
          </ul>
        </li>
      </ul>
    </Sidebar>
  );
};

export default SidebarMolecule;
