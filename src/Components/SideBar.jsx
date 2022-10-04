import {
  Dashboard,
  Face5,
  Healing,
  Inventory,
  LocalShipping,
  Login,
  Logout,
  Notifications,
  Person,
  Settings,
  ShoppingCart,
  StackedLineChart,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  flex: 1;
  padding-left: 0;
  border-right: 0.5px solid lightgray;

  // Horizontal Line
  hr {
    color: red;
    height: 0px;
    border: 0.5px solid lightgray;
  }
`;

const Top = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  align-item: center;
  font-size: 30px;
  justify-content: center;
`;

const Logo = styled.div`
  font-size: 10em;
  font-weight: bold;
  color: blue;
`;

const Center = styled.span`
  font-size: 1em;
  font-wieght: 100;
  padding-left: 30px;
  display: flex;

  ul {
    list-style: none;
    margin: 4px;
    padding: 5px;
    display: flex;
    line-height: 1.5;
    text-indent: 1px;
  }
  li {
    padding: 3px;
    width: 200px;
    height: 30px;
    align-items: center;
    display: flex;
    cursor: pointer;
    &:hover {
      background-color: #fff5ee;
    }
  }

  .icon {
    font-size: 25px;
    color: purple;
  }
`;

const Title = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px;
  padding-left: 10px;
`;

const Bottom = styled.span`
  display: flex;
  // background-color: grey;
  align-items: center;
  margin: 50px;
  // background-color: red;
  gap: 10px;


  .colorOption{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    cursor: pointer;
    
    &:nth-child(1){
      background-color: grey;}
    &:nth-child(2){
      background-color: black;}
   

`;

export const SideBar = () => (
  <Container>
    <Wrapper>
      <Top>top</Top>
      <hr />
      <Logo></Logo>

      <Title>Main</Title>
      <Center>
        <li>
          <ul>
            <Dashboard className="icon" />
            DaskBoard
          </ul>
        </li>
      </Center>
      <Title>List</Title>
      <Center>
        <li>
          <ul>
            <Inventory className="icon" />
            Products
          </ul>
        </li>
      </Center>
      <Center>
        <li>
          <ul>
            <ShoppingCart className="icon" />
            Orders
          </ul>
        </li>
      </Center>
      <Center>
        <li>
          <ul>
            <LocalShipping className="icon" />
            Delivery
          </ul>
        </li>
      </Center>
      <Title>Useful</Title>
      <Center>
        <li>
          <ul>
            <StackedLineChart className="icon" />
            States
          </ul>
        </li>
      </Center>
      <Title>Service</Title>
      <Center>
        <li>
          <ul>
            <Notifications className="icon" />
            Notifications
          </ul>
        </li>
      </Center>
      <Center>
        <li>
          <ul>
            <Healing className="icon" />
            System Heath
          </ul>
        </li>
      </Center>
      <Center>
        <li>
          <ul>
            <Login className="icon" />
            Logs
          </ul>
        </li>
      </Center>
      <Center>
        <li>
          <ul>
            <Settings className="icon" />
            Settings
          </ul>
        </li>
      </Center>
      <Title>Users</Title>
      <Center>
        <li>
          <ul>
            <Face5 className="icon" />
            Profile
          </ul>
        </li>
      </Center>
      <Center>
        <li>
          <ul>
            <Logout className="icon" />
            Logout
          </ul>
        </li>
      </Center>
      <Bottom>
        <div className="colorOption"></div>
        <div className="colorOption"></div>

      </Bottom>
    </Wrapper>
  </Container>
);
