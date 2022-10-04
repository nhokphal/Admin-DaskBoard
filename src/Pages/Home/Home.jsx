import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SideBar } from "../../Components/SideBar";

const Container = styled.div`
  display: flex;
  width: 120vh;
  height: 60vw;
`;
const Wrapper = styled.div`
  flex: 7;
`;

const Title = styled.h2``;

export const Home = () => {
  return (
    <Container>
      <SideBar />
      <Wrapper>container</Wrapper>
    </Container>
  );
};
