// stories for the NavButton component
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Select from '../src/DatePicker/Select/Select';
export default {
  title: 'Example/Select',
  component: Select,
  argTypes: {
    styles: {
      name: 'styles',
      defaultValue: null,
      description: 'styles of the components',
      table: {
        type: {
          detail: ` 
            selectContainer?: React.CSSProperties | undefined;
            selectOptions?: React.CSSProperties | undefined;
            `,
        },
        defaultValue: { summary: null },
      },
    },
  },
} as ComponentMeta<typeof Select>;
const Template: ComponentStory<typeof Select> = args => <Select {...args} />;
export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  styles: {
    selectContainer: {
      height: '200px',
      width: '300px',
    },
  },
};
