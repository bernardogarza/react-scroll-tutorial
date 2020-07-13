import React from 'react';
import styled from 'styled-components';

import Wrapper from '../wrapper/wrapper.component';

const Section3Styled = styled.div`background-color: gray;`;

export default function Section3() {
  return (
    <Section3Styled>
      <Wrapper>
        <h1>Section 3</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
          atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
          voluptates.
        </p>
      </Wrapper>
    </Section3Styled>
  );
}
