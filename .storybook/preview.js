import { addDecorator } from "@storybook/react";
import { Center } from "../src/utils/Center";

addDecorator((story) => <Center>{story()}</Center>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: "black", value: "#333" },
      { name: "grey", value: "#999" },
      { name: "white", value: "#fff" },
    ],
  },
};

export const argTypes = {
  theme: { control: "select", options: ["light", "dark"] },
};
export const args = { theme: "light" };
