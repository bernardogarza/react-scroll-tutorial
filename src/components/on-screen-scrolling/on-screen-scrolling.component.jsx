import React from 'react';
import styled from 'styled-components';

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
  return (
    <OnScreenScrollingStyled>
      <div className="top button-row">
        <div>
          <button>Scroll Up 100px</button>
        </div>
        <div>
          <button>Scroll to Top</button>
        </div>
        <div>
          <button>Scroll Up 300px</button>
        </div>
      </div>
      <div className="bottom button-row">
        <div>
          <button>Scroll Down 100px</button>
        </div>
        <div>
          <button>Scroll to Bottom</button>
        </div>
        <div>
          <button>Scroll Down 300px</button>
        </div>
      </div>
    </OnScreenScrollingStyled>
  );
}
