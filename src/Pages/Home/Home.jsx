import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Chart } from "../../Chart/Chart";
import { NavBar } from "../../Components/NavBar";
import { SideBar } from "../../Components/SideBar";
import { Feature } from "../../Feature/Feature";
import { Widget } from "../../Widget/Widget";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  flex: 7;
`;

const Widgets = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 20px;
`;

const Charts = styled.div`
  display: flex;
`;

const Title = styled.h2``;

export const Home = () => {
  return (
    <Container>
      <SideBar />
      <Wrapper>
        <NavBar />
        <Title></Title>
        <Widgets>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </Widgets>

        <Charts>
          <Feature />
          <Chart />
        </Charts>
      </Wrapper>
    </Container>
  );
};
