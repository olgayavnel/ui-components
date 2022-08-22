
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Story } from '@storybook/react/types-6-0'
import { Bestsellers, BestsellersProps } from './Bestsellers';

export default {
  title: 'Component/Bestsellers',
  component: Bestsellers,
  decorators: [withDesign],
  argTypes: {},
  
  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/40:2.png',
    },
  },

};

const Template: Story<BestsellersProps> = (args: BestsellersProps) => {
  return <Bestsellers {...args} />
}

export const Basic = Template.bind({});
Basic.args = {
  label: 'Bestsellers',
};
  