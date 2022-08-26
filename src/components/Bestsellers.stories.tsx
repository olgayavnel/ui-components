import { withDesign } from "storybook-addon-designs";
import { Story } from "@storybook/react/types-6-0";
import { Bestsellers, BestsellersProps } from "./Bestsellers";

// component level
export default {
  title: "Component/Bestsellers",
  component: Bestsellers,
  decorators: [withDesign],
  // Default args that will be applied
  // in case no custom args are specified.
  args: {
    label: "Bestsellers",
    image: "",
    name: "Sneakers",
    brand: "Nike",
    price: "100",
  },
  argTypes: {},

  parameters: {
    design: {
      type: "image",
      url:
        "https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/40:2.png",
    },
  },
};

// story level
const Template: Story<BestsellersProps> = (args: BestsellersProps) => {
  return <Bestsellers {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  products: [
    {
      id: "1",
      name: "Nike Air Max 270",
      brand: "Nike",
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/15989f45-9d49-4c9a-8e02-f9ed1d8a0aa0/free-metcon-4-trainingsschuh-TQMCZg.png",
      price: "195.80",
    },
    {
      id: "2",
      name: "Nike Air Max 90",
      brand: "Nike",
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/830d2ce1-2166-4777-ac99-acddd3639e82/tiempo-legend-9-elite-fg-fussballschuh-fur-normalen-rasen-fFqX06.png",
      price: "195.80",
    },
    {
      id: "3",
      name: "Nike Air Max Plus",
      brand: "Nike",
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e72c2c6d-eaf7-4553-b67a-8c27ec96f062/free-metcon-4-trainingsschuhe-x7P8BQ.png",
      price: "195.80",
    },
  ],
};
Basic.parameters = {};
