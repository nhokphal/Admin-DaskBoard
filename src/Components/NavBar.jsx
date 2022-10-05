import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Badge } from "@mui/material";

const Container = styled.div``;

const Wrapper = styled.div`
  // background-color: red;
  border: 0.5px solid lightgray;
  display: flex;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled.div`
  display: flex;
  padding: 3px;
  border: 0.5px solid lightgray;
  align-items: center;

  input {
    border: none;
    outline: none;
  }
`;

const Language = styled.div`
  display: flex;
`;

const Items = styled.div`
  display: flex;
  cursor: pointer;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  align-items: center;
  border-radius: 50%;
`;

const Item = styled.div`
  // padding: 10px;
  // margin: 10px;
`;

const imgDTB = {
  img: "https://cdn.pixabay.com/photo/2014/10/01/16/36/siamese-468814_960_720.jpg",
};

export const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <input type="text" placeholder="Seach ..." />
          <SearchIcon />
        </Search>
        <Items>
          <Item>
            <Language>
              <LanguageOutlinedIcon />
              Language
            </Language>
          </Item>
          <Item>
            <DarkModeOutlinedIcon />
          </Item>
          <Item>
            <FullscreenExitOutlinedIcon />
          </Item>
          <Item>
            <Badge badgeContent={4} color="error">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </Item>
          <Item>
            <Badge badgeContent={4} color="error">
              <ChatBubbleOutlineOutlinedIcon />
            </Badge>
          </Item>
          <Item>
            <ListOutlinedIcon />
          </Item>
          <Item>
            <Avatar src={imgDTB.img}></Avatar>
          </Item>
        </Items>
      </Wrapper>
    </Container>
  );
};
