import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Header from '../src/DatePicker/Header/Header';

export default {
  title: 'Example/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    minDate: {
      name: 'minDate',
      defaultValue: null,
      description: 'minDate of the state',
    },
    maxDate: {
      name: 'maxDate',
      defaultValue: null,
      description: 'maxDate of the state',
    },

    ariaArrow: {},
    primarycolor: {
      name: 'primarycolor',
      type: { name: 'string', required: true },
      defaultValue: 'teal',
      description: 'primarycolor of the button : string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'teal' },
      },
      control: {
        type: 'color',
      },
    },
    formatMonth: {
      name: 'formatMonth',
      type: { name: 'string', required: false },
      defaultValue: 'LLLL',
      description: 'format of the month',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'LLLL' },
      },
      control: {
        type: 'text',
      },
    },
    formatYear: {
      name: 'formatYear',
      type: { name: 'string', required: false },
      defaultValue: 'yyyy',
      description: 'format of the year',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'yyyy' },
      },
      control: {
        type: 'text',
      },
    },
    ariaLabels: {},
    styles: {
      name: 'styles',
      defaultValue: null,
      description: 'styles of the components',
      table: {
        type: {
          detail: ` 
          headerStyles: {
            header: "css properties",
            arrowButton: {
              "css properties",
              childrens: JSX.Element[];
              size: string;
            }
          }`,
        },
        defaultValue: { summary: null },
      },
    },
  },
} as ComponentMeta<typeof Header>;

export const Default = (args: any) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(
    new Date(2022, 10, 10)
  );
  const [displaySelectMonthOrYear, setDisplayMonthOrYear] = useState<{
    isVisibleMonth: boolean;
    isVisibleYear: boolean;
  }>({
    isVisibleMonth: false,
    isVisibleYear: false,
  });
  return (
    <Header
      value={selectedDate}
      onChange={setSelectedDate}
      displaySelectMonthOrYear={displaySelectMonthOrYear}
      setDisplayMonthOrYear={setDisplayMonthOrYear}
      {...args}
    />
  );
};
// const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: 'Jane Doe',
//   },
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
