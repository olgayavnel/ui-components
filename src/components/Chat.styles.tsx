import styled from "styled-components";
import { device } from "../utils/theme";

export const ChatWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  height: 212px;
  width: 375px;
  border-radius: 1rem;

  @media ${device.tablet} {
    height: 9.625rem;
    width: 23.438rem;
  }
`;

export const ChatContent = styled.div`
  background-color: rgb(70, 67, 211);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem 1rem 0 0;
  padding: 1rem 2rem;
  height: 154px;
`;

export const ChatHeaderWrapper = styled.div`
  background-color: rgb(70, 67, 211);
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  column-gap: 0.7rem;
`;

export const Avatar = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const ChatHeaderTypography = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatHeaderPrimaryText = styled.p`
  color: rgb(255, 255, 255);
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.016rem;
  line-height: 1.371rem;
`;

export const ChatHeaderSecondaryText = styled.p`
  color: rgb(255, 255, 255);
  margin: 0;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.067rem;
`;
export const ChatHistoryWrapper = styled.div`
  background-color: rgb(70, 67, 211);
  width: 100%;
  width: 95%;
  align-self: self-start;
`;

export const ChatHistory = styled.p`
  color: rgb(255, 255, 255);
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  border-radius: 0 0 1rem 1rem;
  height: 58px;
`;

export const ChatForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
`;

export const ChatInput = styled.input`
  display: flex;
  height: 100%;
  border: none;
  color: rgb(175, 175, 189, 0.5);
  font-size: 0.9rem;
  line-height: 1.5rem;
  font-weight: 400;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
export const SubmitButton = styled.button`
  color: rgb(70, 67, 211);
  cursor: pointer;
  border: 0;
  background: none;
`;

export const ButtonTypography = styled.p`
  font-weight: 600;
  line-height: 1.125rem;
  font-size: 0.938rem;
  margin: 0;
`;
