// stories for the NavButton component
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import NavButton from '../src/DatePicker/Header/NavButton';
import { SvgButtonLeftMonth } from '../src/DatePicker/Header/styled';
export default {
  title: 'Example/NavButton',
  component: NavButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {
      name: 'onClick',
      type: { name: 'function', required: true },
      defaultValue: null,
      description: 'onClick of the button',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'function',
      },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: true },
      defaultValue: false,
      description: 'disabled of the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    dataTestid: {},
    ariaLabel: {},
  },
} as ComponentMeta<typeof NavButton>;
const Template: ComponentStory<typeof NavButton> = args => (
  <NavButton {...args}>
    <SvgButtonLeftMonth />
  </NavButton>
);
export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => console.log('onClick'),
  disabled: false,
  dataTestid: 'dataTestid',
  customArrow: '1',
};
