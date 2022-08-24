import React, { ReactNode, useState } from "react";
import { IoMdClose } from "react-icons/io";

import avatar from "../assets/avatar.jpg";
import {
  Avatar,
  Canvas,
  ChatContent,
  ChatForm,
  ChatHeaderPrimaryText,
  ChatHeaderSecondaryText,
  ChatHeaderTypography,
  ChatHeaderWrapper,
  ChatHistory,
  ChatHistoryWrapper,
  ChatInput,
  ChatLabel,
  ChatWrapper,
  InputWrapper,
  SubmitButton,
} from "./Chat.styles";

export interface ChatProps {
  children: ReactNode;
  label?: string;
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

  return (
    <Canvas>
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
            <IoMdClose color="#A2A1E9" />
          </ChatHeaderWrapper>
          <ChatHistoryWrapper>
            <ChatHistory>{chatHistory}</ChatHistory>
          </ChatHistoryWrapper>
        </ChatContent>

        <InputWrapper>
          <ChatForm onSubmit={handleSubmit}>
            <ChatLabel>
              <ChatInput
                about=""
                type="string"
                name="chatText"
                value={chatText}
                onChange={handleChatTextChange}
              />
            </ChatLabel>
            <SubmitButton type="submit">{children}</SubmitButton>
          </ChatForm>
        </InputWrapper>
      </ChatWrapper>
    </Canvas>
  );
};
