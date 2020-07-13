import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll';

const NavbarStyled = styled.div`
  background: black;
  font-size: 24px;
  position: fixed;
  width: 100%;
  div {
    padding: 40px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    color: white;
    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid white;
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarStyled>
      <div>
        <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
          Section 1
        </Link>
        <Link activeClass="active" to="section2" spy={true} smooth={true} duration={1000}>
          Section 2
        </Link>
        <Link activeClass="active" to="section3" spy={true} smooth={true} duration={1000}>
          Section 3
        </Link>
      </div>
    </NavbarStyled>
  );
}
