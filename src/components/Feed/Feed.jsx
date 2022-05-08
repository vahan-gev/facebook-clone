import React from "react";
import styled from "styled-components";
import {
  PeopleAltOutlined,
  Tv,
  Group,
  AccessTime,
  Bookmarks,
  ExpandMore,
  VideoCall,
  InsertPhoto,
  TagFaces,
} from "@material-ui/icons";
import Post from "../Post/Post";
export default function Feed() {
  const data = [
    {
      author: "Vahan Gevorgyan",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      verified: true,
      postIMG:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      postAuthorURL:
        "https://marketplace.canva.com/EAE2_DLA9H8/1/0/1600w/canva-mascot-character-twitch-profile-picture-wD-8htUsoVw.jpg",
    },
    {
      author: "Elon Musk",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      verified: true,
      postIMG:
        "https://discovery.sndimg.com/content/dam/images/discovery/stock/2019/11/26/GettyImages-1157666192.jpg.rend.hgtvcom.406.406.suffix/1574799885962.jpeg",
      postAuthorURL:
        "https://cdn.vox-cdn.com/thumbor/XT9uTPJO2p_VG-fGB29CmvOh9N0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23119870/1234657391.jpg",
    },
    {
      author: "Bill Gates",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      verified: false,
      postAuthorURL:
        "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
    },
  ];

  return (
    <FeedContainer>
      <SidebarSticky>
        <SidebarButton>
          <img
            src="https://marketplace.canva.com/EAE2_DLA9H8/1/0/1600w/canva-mascot-character-twitch-profile-picture-wD-8htUsoVw.jpg"
            alt="profile"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
            }}
          />
          <h4>Vahan Gevorgyan</h4>
        </SidebarButton>
        <SidebarButton>
          <PeopleAltOutlined fontSize="inherit" color="inherit" />
          <h4>Friends</h4>
        </SidebarButton>
        <SidebarButton>
          <Group fontSize="inherit" color="inherit" />
          <h4>Groups</h4>
        </SidebarButton>
        <SidebarButton>
          <Tv fontSize="inherit" color="inherit" />
          <h4>Watch</h4>
        </SidebarButton>
        <SidebarButton>
          <AccessTime fontSize="inherit" color="inherit" />
          <h4>Memories</h4>
        </SidebarButton>
        <SidebarButton>
          <Bookmarks fontSize="inherit" color="inherit" />
          <h4>Saved</h4>
        </SidebarButton>
        <SidebarButton>
          <ButtonCircle>
            <ExpandMore />
          </ButtonCircle>
          <h4>See More</h4>
        </SidebarButton>
      </SidebarSticky>
      <NewsFeed>
        <CreatePost>
          <CreatePostTop>
            <img
              src="https://marketplace.canva.com/EAE2_DLA9H8/1/0/1600w/canva-mascot-character-twitch-profile-picture-wD-8htUsoVw.jpg"
              alt="profile"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
              }}
            />
            <PostBar placeholder="What's on your mind, Vahan?" />
          </CreatePostTop>
          <hr color="#4E4F50" />
          <CreatePostBottom>
            <CreateActionButton>
              <VideoCall htmlColor="#F4556F" />
              <h4>Live Video</h4>
            </CreateActionButton>
            <CreateActionButton>
              <InsertPhoto htmlColor="#58C472" />
              <h4>Photo/video</h4>
            </CreateActionButton>
            <CreateActionButton>
              <TagFaces htmlColor="#F8C03E" />
              <h4>Feeling/activity</h4>
            </CreateActionButton>
          </CreatePostBottom>
        </CreatePost>
        {data.map((post) => (
          <Post
            author={post.author}
            text={post.text}
            verified={post.verified}
            postIMG={post.postIMG}
            postAuthorURL={post.postAuthorURL}
          />
        ))}
      </NewsFeed>
      <ContactsSticky>
        <div
          style={{
            width: 330,
            display: "flex",
            justifyContent: "flex-start",
            paddingRight: 15,
            marginBottom: 10,
          }}
        >
          <h3
            style={{
              color: "#b0b3b8",
            }}
          >
            Contacts
          </h3>
        </div>
        <SidebarButton>
          <img
            src="https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg"
            alt="profile"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
            }}
          />
          <h4>Bill Gates</h4>
        </SidebarButton>
        <SidebarButton>
          <img
            src="https://cdn.vox-cdn.com/thumbor/XT9uTPJO2p_VG-fGB29CmvOh9N0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23119870/1234657391.jpg"
            alt="profile"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
            }}
          />
          <h4>Elon Musk</h4>
        </SidebarButton>
        <SidebarButton>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
            alt="profile"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
            }}
          />
          <h4>Mark Zuckerberg</h4>
        </SidebarButton>
        <SidebarButton>
          <img
            src="https://media1.popsugar-assets.com/files/thumbor/HwtAUAufmAZv-FgGEIMJS2eQM-A/0x1:2771x2772/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/30/878/n/1922398/eb11f12e5e825104ca01c1.02079643_/i/Robert-Downey-Jr.jpg"
            alt="profile"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
            }}
          />
          <h4>Robert Downey Jr</h4>
        </SidebarButton>
        <SidebarButton>
          <img
            src="https://pbs.twimg.com/profile_images/1247482752351588352/EgHoUNqQ_400x400.jpg"
            alt="profile"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
            }}
          />
          <h4>Chris Hemsworth</h4>
        </SidebarButton>
      </ContactsSticky>
    </FeedContainer>
  );
}

const SidebarSticky = styled.div`
  position: fixed;
  z-index: 1;
  top: 80px;
  left: 10px;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const ContactsSticky = styled.div`
  position: fixed;
  z-index: 1;
  top: 80px;
  right: 10px;
  @media only screen and (max-width: 930px) {
    display: none;
  }
`;

const CreateActionButton = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  transition: 0.3s;
  justify-content: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  > h4 {
    margin-left: 5px;
    color: #e7e9ed;
    transition: 0.2s;
  }
  > .MuiSvgIcon-root {
    font-size: 30px;
  }
  @media only screen and (max-width: 1332px) {
    > h4 {
      font-size: 14px;
      margin-left: 10px;
    }
    > .MuiSvgIcon-root {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 1238px) {
    > h4 {
      font-size: 12px;
      margin-left: 5px;
    }
    > .MuiSvgIcon-root {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 409px) {
    > h4 {
      font-size: 10px;
    }
  }
  :hover {
    background: #464749;
    transition: 0.3s;
  }
`;

const CreatePostTop = styled.div`
  display: flex;
  padding: 15px;

  flex-direction: row;
`;
const CreatePostBottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 15px 15px 15px;
`;

const PostBar = styled.input`
  background-color: #4e4f50;
  color: #b0b3b8;
  outline: none;
  border: 0px;
  margin-left: 10px;
  border-radius: 50px;
  text-indent: 15px;
  width: 100%;
  font-size: 16px;
`;

const CreatePost = styled.div`
  background-color: #242526;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const FeedContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
  }
  @media only screen and (max-width: 930px) {
    justify-content: center;
  }
`;

const NewsFeed = styled.div`
  display: flex;
  flex: 0.4;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  @media only screen and (max-width: 1200px) {
    flex: 0.6;
  }
  @media only screen and (max-width: 930px) {
    flex: 0.8;
  }
  @media only screen and (max-width: 805px) {
    flex: 1;
  }
`;

const ButtonCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #4e4f50;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  > .MuiSvgIcon-root {
    color: #b0b3b8;
    font-size: 25px;
  }
`;

const SidebarButton = styled.div`
  width: 330px;
  padding: 10px 5px 10px 15px;
  border-radius: 8px;
  margin: 5px 0px 5px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  > h4 {
    margin-left: 15px;
    color: #e7e9ed;
  }
  > .MuiSvgIcon-root {
    color: #b0b3b8;
    font-size: 30px;
  }

  :hover {
    background: #464749;
    transition: 0.3s;
  }
`;
