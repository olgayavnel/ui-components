import styled from "styled-components";

export const Canvas = styled.section`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #faefe3;
  width: 22rem;
  height: 12rem;
  border-radius: 1rem;
  padding: 6rem 8rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  margin: 4rem 2rem;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ChatContent = styled.div`
  background-color: rgb(70, 67, 211);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 100%;
  border-radius: 1rem 1rem 0 0;
  padding: 1rem 2rem;
`;

export const ChatHeaderWrapper = styled.div`
  background-color: rgb(70, 67, 211);
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  column-gap: 1rem;
`;
export const Avatar = styled.img`
  height: 100%;
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

export const ChatHeaderPrimaryText = styled.h3`
  color: rgb(255, 255, 255);
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
`;

export const ChatHeaderSecondaryText = styled.p`
  color: rgb(162, 161, 233);
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4rem;
`;
export const ChatHistoryWrapper = styled.div`
  background-color: rgb(70, 67, 211);
  color: rgb(255, 255, 255);
  width: 100%;
  width: 95%;
  align-self: self-start;
`;

export const ChatHistory = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 200;
  letter-spacing: 0.1rem;
`;

export const ChatForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  border-radius: 0 0 1rem 1rem;
`;

export const ChatLabel = styled.label``;

export const ChatInput = styled.input`
  display: flex;
  height: 100%;
  border: none;
  color: rgb(175, 175, 189, 0.5);
  font-size: 1rem;
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
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.02rem;
`;
