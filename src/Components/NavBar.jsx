import React from "react";
import styled from "@emotion/styled/types/base";

const Container = styled.div`
  background-color: red;
`;

const Wrapper = styled.div`
  padding: 10px;
`;
export const NavBar = () => {
  return (
    <Container>
      <Wrapper>Navbar</Wrapper>
    </Container>
  );
};
