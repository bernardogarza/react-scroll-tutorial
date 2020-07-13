import React from 'react';
import styled from 'styled-components';

import { animateScroll as scroll } from 'react-scroll';

const OnScreenScrollingStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .button-row {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    div {
      margin: 0 10px;
    }
    button {
      padding: 3px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .bottom {
    margin-bottom: 115px;
  }
`;

export default function OnScreenScrolling() {
  // Scroll up
  function scrollToTop() {
    scroll.scrollToTop();
  }
  function scrollMoreUp300() {
    scroll.scrollMore(-300);
  }
  function scrollMoreUp100() {
    scroll.scrollMore(-100);
  }

  // Scroll down
  function scrollToBottom() {
    scroll.scrollToBottom();
  }
  function scrollMoreDown300() {
    scroll.scrollMore(300);
  }
  function scrollMoreDown100() {
    scroll.scrollMore(100);
  }

  return (
    <OnScreenScrollingStyled>
      <div className="top button-row">
        <div>
          <button onClick={scrollMoreUp100}>Scroll Up 100px</button>
        </div>
        <div>
          <button onClick={scrollToTop}>Scroll to Top</button>
        </div>
        <div>
          <button onClick={scrollMoreUp300}>Scroll Up 300px</button>
        </div>
      </div>
      <div className="bottom button-row">
        <div>
          <button onClick={scrollMoreDown100}>Scroll Down 100px</button>
        </div>
        <div>
          <button onClick={scrollToBottom}>Scroll to Bottom</button>
        </div>
        <div>
          <button onClick={scrollMoreDown300}>Scroll Down 300px</button>
        </div>
      </div>
    </OnScreenScrollingStyled>
  );
}
