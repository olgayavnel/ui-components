
import React from 'react';

export interface ChatProps {
  label: string
}

export const Chat: React.FC<ChatProps> = props => {
  return <div>{props.label}</div>;
}
  