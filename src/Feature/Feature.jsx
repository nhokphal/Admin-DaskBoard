import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  flex: 2;

`;

const Wrapper = styled.div`

`;

const Features = styled.div
`
padding: 200px;
-webkit-box-shadow: 5px 14px 16px 20px rgba(0,0,0,0.07); 
box-shadow: 5px 14px 16px 20px rgba(0,0,0,0.07);
`;
export const Feature = () => {
  return (
    <Container>
      <Wrapper>
        <Features>
            Feature
        </Features>
      </Wrapper>
    </Container>
  );
};
