import React, { ReactNode, useState } from "react";
import { IoMdClose } from "react-icons/io";

import avatar from "../assets/avatar.jpg";
import {
  Avatar,
  ButtonTypography,
  ChatContent,
  ChatForm,
  ChatHeaderPrimaryText,
  ChatHeaderSecondaryText,
  ChatHeaderTypography,
  ChatHeaderWrapper,
  ChatHistory,
  ChatHistoryWrapper,
  ChatInput,
  ChatWrapper,
  InputWrapper,
  SubmitButton,
} from "./Chat.styles";

export interface ChatProps {
  children: ReactNode;
  headerPrimaryText: string;
  headerSecondaryText: string;
  chatHistory: string;
}

export const Chat: React.FC<ChatProps> = ({
  children,
  headerPrimaryText,
  headerSecondaryText,
  chatHistory,
  ...props
}: ChatProps) => {
  const [chatText, setChatText] = useState("Type your message…");

  // updates chatText on every keystroke/onChange event
  const handleChatTextChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setChatText(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Message sent");
    // reset the form after using the value
    setChatText("");
  };

  const closeChat = () => {
    alert("Chat closed");
  };

  return (
    <ChatWrapper>
      <ChatContent>
        <ChatHeaderWrapper>
          <Avatar src={avatar} alt="avatar" />
          <ChatHeaderTypography>
            <ChatHeaderPrimaryText>{headerPrimaryText}</ChatHeaderPrimaryText>
            <ChatHeaderSecondaryText>
              {headerSecondaryText}
            </ChatHeaderSecondaryText>
          </ChatHeaderTypography>
          <IoMdClose
            onClick={closeChat}
            color="rgb(255, 255, 255)"
            style={{ cursor: "pointer", height: "1rem", width: "1rem" }}
          />
        </ChatHeaderWrapper>
        <ChatHistoryWrapper>
          <ChatHistory>{chatHistory}</ChatHistory>
        </ChatHistoryWrapper>
      </ChatContent>

      <InputWrapper>
        <ChatForm onSubmit={handleSubmit}>
          <ChatInput
            about=""
            type="string"
            name="chatText"
            value={chatText}
            onChange={handleChatTextChange}
          />
          <SubmitButton type="submit">
            <ButtonTypography>{children}</ButtonTypography>
          </SubmitButton>
        </ChatForm>
      </InputWrapper>
    </ChatWrapper>
  );
};
