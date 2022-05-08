import React from "react";
import styled from "styled-components";
import {
  Home,
  PeopleAltOutlined,
  Tv,
  Group,
  SportsEsports,
  Apps,
  Email,
  Notifications,
  ExpandMore,
  Search,
} from "@material-ui/icons";
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="logo"
          style={{
            width: 45,
            height: 45,
            cursor: "pointer",
          }}
        />
        <SearchBar placeholder="Search Facebook" />
        <SearchButtonCircle>
          <Search color="inherit" fontSize="inherit" />
        </SearchButtonCircle>
      </HeaderLeft>
      <HeaderMiddle>
        <HeaderButton>
          <Home />
        </HeaderButton>
        <HeaderButton>
          <PeopleAltOutlined />
        </HeaderButton>
        <HeaderButton>
          <Tv />
        </HeaderButton>
        <HeaderButton>
          <Group />
        </HeaderButton>
        <HeaderButton>
          <SportsEsports />
        </HeaderButton>
      </HeaderMiddle>
      <HeaderRight>
        <AvatarContainer>
          <img
            src="https://marketplace.canva.com/EAE2_DLA9H8/1/0/1600w/canva-mascot-character-twitch-profile-picture-wD-8htUsoVw.jpg"
            alt="profile"
            style={{
              width: 25,
              height: 25,
              borderRadius: "50%",
            }}
          />
          <h4>Vahan</h4>
        </AvatarContainer>
        <HeaderButtonCircle>
          <Apps color="inherit" fontSize="inherit" />
        </HeaderButtonCircle>
        <HeaderButtonCircle>
          <Email color="inherit" fontSize="inherit" />
        </HeaderButtonCircle>
        <HeaderButtonCircle>
          <Notifications color="inherit" fontSize="inherit" />
        </HeaderButtonCircle>
        <HeaderButtonCircle>
          <ExpandMore color="inherit" fontSize="inherit" />
        </HeaderButtonCircle>
      </HeaderRight>
    </HeaderContainer>
  );
}

const AvatarContainer = styled.div`
  padding: 5px 10px 5px 5px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 5px;
  > h4 {
    margin-left: 5px;
    color: #e7e9ed;
  }
  :hover {
    background: #696b6e;
    transition: 0.3s;
  }
  @media only screen and (max-width: 1010px) {
    display: none;
  }
`;

const SearchBar = styled.input`
  background-color: #3a3b3c;
  color: #b0b3b8;
  outline: none;
  border: 0px;
  margin-left: 10px;
  border-radius: 50px;
  text-indent: 15px;
  width: 250px;
  font-size: 16px;
  height: 40px;
  @media only screen and (max-width: 1111px) {
    display: none;
  }
`;
const SearchButtonCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #4e4f50;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  margin-left: 15px;
  margin-right: 5px;
  cursor: pointer;
  display: none;
  transition: 0.5s;
  > .MuiSvgIcon-root {
    color: #e7e9ed;
    font-size: 23px;
  }
  :hover {
    background: #696b6e;
    transition: 0.1s;
  }
  @media only screen and (max-width: 1111px) {
    display: flex;
  }
`;
const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #242526;
  border-bottom: 0.5px solid #b0b3b8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 805px) {
    display: none;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const HeaderButtonCircle = styled.div`
  width: 45px;
  height: 45px;
  background-color: #4e4f50;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.5s;
  > .MuiSvgIcon-root {
    color: #e7e9ed;
    font-size: 28px;
  }
  :hover {
    background: #696b6e;
    transition: 0.1s;
  }
  @media only screen and (max-width: 1280px) {
    width: 40px;
    height: 40px;
    > .MuiSvgIcon-root {
      font-size: 23px;
    }
  }
`;

const HeaderButton = styled.div`
  height: 45px;
  width: 120px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  margin-right: 3px;
  transition: 0.5s;
  cursor: pointer;
  > .MuiSvgIcon-root {
    color: #b0b3b8;
    font-size: 28px;
  }
  :hover {
    background: #303031;
    transition: 0.1s;
  }
  @media only screen and (max-width: 1280px) {
    width: 90px;
    > .MuiSvgIcon-root {
      color: #b0b3b8;
      font-size: 25px;
    }
  }
`;
