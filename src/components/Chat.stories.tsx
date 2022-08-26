import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story } from "@storybook/react/types-6-0";
import { Chat, ChatProps } from "./Chat";

export default {
  title: "Component/Chat",
  component: Chat,
  decorators: [withDesign],
  args: {
    headerPrimaryText: "Emily Dougrer",
    headerSecondaryText: "Developer",
    chatHistory: "Hi there.👋  We use Boards to share initial goals and ideas.",
    children: "Send",
  },
  argTypes: {
    onSubmit: { action: "submitted" },
    onChange: { action: "typing" },
  },

  parameters: {
    design: {
      type: "image",
      url:
        "https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/7:10.png",
    },
  },
};

const Template: Story<ChatProps> = (args: ChatProps) => {
  return <Chat {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};
