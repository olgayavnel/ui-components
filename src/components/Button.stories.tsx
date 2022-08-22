import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Component/Button",
  component: Button,
  decorators: [withDesign],
  argTypes: {},
};

const Template: Story<ButtonProps> = (args) => {
  return (
    <div>
      <p>
        This is a sample component. To learn more about Storybook:
        <a
          href="https://storybook.js.org/docs/react/get-started/introduction"
          target="_blank"
          rel="noreferrer"
        >
          https://storybook.js.org/docs/react/get-started/introduction
        </a>
      </p>
      <Button {...args} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Button",
};
