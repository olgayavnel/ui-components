import { addDecorator } from "@storybook/react";
import { Center } from "../src/utils/Center";

addDecorator((story) => <Center>{story()}</Center>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: "black", value: "rgb(51, 51, 51)" },
      { name: "grey", value: "rgb(153, 153, 153)" },
      { name: "white", value: "rgb(255, 255, 255)" },
      { name: "powder", value: "rgb(250, 239, 227)" },
    ],
  },
};
