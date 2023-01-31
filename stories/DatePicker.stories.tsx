import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DatePicker } from '../src/DatePicker/DatePicker';
// import type { IDatePickerProps } from "../src/DatePicker/types";
const meta: ComponentMeta<typeof DatePicker> = {
  title: 'Example/DatePicker',
  component: DatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: {
      defaultValue: null,
      description: 'id of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'text',
      },
    },
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
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'placeholder of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'text',
      },
    },
    formatDate: {
      name: 'formatDate',
      type: { name: 'string', required: true },
      defaultValue: 'yyyy-MM-dd',
      description: 'the format of the date inside the input : string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'yyyy-MM-dd' },
      },
      control: {
        type: 'text',
      },
    },
    name: {
      name: 'name',
      type: { name: 'string', required: true },
      defaultValue: null,
      description: 'name of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'text',
      },
    },
    ariaRequired: {
      name: 'ariaRequired',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'is required?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    iso: {
      name: 'iso',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'format iso',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    formatDay: {
      name: 'formatDay',
      type: { name: 'string', required: false },
      defaultValue: 'EEE',
      description: 'format of the day',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'EEE' },
      },
      control: {
        type: 'text',
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
      defaultValue: 'yyy',
      description: 'format of the year',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'yyy' },
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
          detail: ` {
          primarycolor: "red", // color
          secondarycolor: "blue",// color
          tertiarycolor: "green",// color
          inputStyles: {"css properties"},
          calendarWrapperStyles?: {"css properties"},
          headerStyles: {
            header: "css properties",
            arrowButton: {
              "css properties",
              childrens: JSX.Element[];
              size: string;
            }
          };
          days: {
            buttonday:{"css properties"};
            dayname: {"css properties"};
          }
          select: {
            selectContainer: {"css properties"};
            selectOptions: {"css properties"};
          }
        }`,
        },
        defaultValue: { summary: null },
      },
    },
    withPrefix: {
      name: 'withPrefix',
      type: { name: 'boolean', required: false },
      defaultValue: true,
      description: 'display the days of the last months',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    withSuffix: {
      name: 'withSuffix',
      type: { name: 'boolean', required: false },
      defaultValue: true,
      description: 'display the days of the next months',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof DatePicker>;
export default meta;

export const Default = (args: any) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  return (
    <DatePicker value={selectedDate} onChange={setSelectedDate} {...args} />
  );
};
const Template: ComponentStory<typeof DatePicker> = args => {
  return <DatePicker {...args} />;
};
export const WithCustomStyle = Template.bind({});

WithCustomStyle.args = {
  value: new Date(),
  id: 'datePicker',
  name: 'datePicker',
  placeholder: '2022-10-02',
  ariaRequired: false,
  iso: false,
  withPrefix: true,
  withSuffix: true,
  formatDate: 'yyyy-MM-dd',
  formatDay: 'EEE',
  formatMonth: 'LLLL',
  formatYear: 'yyy',
  styles: {
    primarycolor: 'red',
    secondarycolor: 'blue',
    tertiarycolor: 'green',
    inputStyles: {
      border: '2px solid red',
      borderRadius: '5px',
      padding: '5px',
      width: '100%',
    },
    calendarWrapperStyles: {
      border: '2px solid red',
      borderRadius: '5px',
      padding: '5px',
    },
  },
  ariaLabels: {
    input: 'je suis un input en francais',
    ariaArrow: {
      prevYear: 'année dernière',
      prevMonth: 'mois dernier',
      nextMonth: 'mois prochain',
      nextYear: 'année prochaine',
      customSelectMonth: 'mois',
      customSelectYear: 'année',
    },
  },
};
