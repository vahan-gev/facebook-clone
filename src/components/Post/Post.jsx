import React from "react";
import styled from "styled-components";
import {
  ThumbUpOutlined,
  ReplyOutlined,
  ChatBubbleOutline,
} from "@material-ui/icons";
export default function Post(props) {
  return (
    <PostContainer>
      <TopBar>
        <img
          src={props.postAuthorURL}
          alt="profile"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
          }}
        />
        <p>{props.author}</p>
        {props.verified && (
          <img
            src="https://icon-library.com/images/verified-icon-png/verified-icon-png-12.jpg"
            alt="tick"
            style={{
              width: 20,
              height: 20,
              marginLeft: 5,
            }}
          />
        )}
      </TopBar>
      <PostTextContainer>
        <p>{props.text}</p>
      </PostTextContainer>
      {props.postIMG && (
        <PostImageContainer>
          <img
            src={props.postIMG}
            alt="user upload"
            style={{
              width: "100%",
            }}
          />
        </PostImageContainer>
      )}
      <PostBottom>
        <PostActionButton>
          <ThumbUpOutlined />
          <h4>Like</h4>
        </PostActionButton>
        <PostActionButton>
          <ChatBubbleOutline />
          <h4>Comment</h4>
        </PostActionButton>
        <PostActionButton>
          <ReplyOutlined />
          <h4>Share</h4>
        </PostActionButton>
      </PostBottom>
    </PostContainer>
  );
}

const PostBottom = styled.div`
  display: flex;
  flex-direction: row;
`;

const PostImageContainer = styled.div``;
const PostContainer = styled.div`
  background-color: #242526;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
`;
const TopBar = styled.div`
  padding: 15px 15px 5px 15px;
  display: flex;
  flex-direction: row;
  > p {
    color: #e7e9ed;
    margin-left: 10px;
    font-size: 18px;
  }
  align-items: center;
`;

const PostTextContainer = styled.div`
  padding: 0px 15px 5px 15px;
  > p {
    color: #e7e9ed;
    font-size: 14px;
  }
  @media only screen and (max-width: 500px) {
    > p {
      font-size: 12px;
    }
  }
`;
const PostActionButton = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;

  border-radius: 8px;
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
    margin-left: 10px;
    color: #e7e9ed;
    font-size: 14px;
  }
  > .MuiSvgIcon-root {
    font-size: 19px;
    color: #b0b3b8;
  }

  :hover {
    background: #464749;
    transition: 0.3s;
  }
`;
