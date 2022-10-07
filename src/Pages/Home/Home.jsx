import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Chart } from "../../Chart/Chart";
import { NavBar } from "../../Components/NavBar";
import { SideBar } from "../../Components/SideBar";
import { Feature } from "../../Feature/Feature";
import { Table, Tables } from "../../Table/Tables";
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

const LastTitle = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
  font-weight: 300;
  font-size: 20px;
  border-radius: 10px;
`;

export const Home = () => {
  return (
    <Container>
      <SideBar />
      <Wrapper>
        <NavBar />
        {/* <Title></Title> */}
        <Widgets>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </Widgets>

        <Charts>
          <Feature />
          <Chart title="Last 6 Months Chart" />
        </Charts>

        <LastTitle>Last Transaction</LastTitle>
        <Tables />
      </Wrapper>
    </Container>
  );
};
