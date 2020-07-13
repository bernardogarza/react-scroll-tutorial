import React from 'react';
import styled from 'styled-components';

import Wrapper from '../wrapper/wrapper.component';

const Section2Styled = styled.div`background-color: #008000;`;

export default function Section2() {
  return (
    <Section2Styled>
      <Wrapper>
        <h1>Section 2</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
          atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
          voluptates.
        </p>
      </Wrapper>
    </Section2Styled>
  );
}
