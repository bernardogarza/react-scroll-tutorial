import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  background: black;
  font-size: 24px;
  position: fixed;
  width: 100%;
  ul {
    padding: 40px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    list-style-type: none;
    color: white;
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <ul>
        <li>Section 1</li>
        <li>Section 2</li>
        <li>Section 3</li>
      </ul>
    </HeaderStyled>
  );
}
