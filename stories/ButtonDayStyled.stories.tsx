import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import type { IButtonDay } from "../src/DatePicker/ButtonDay/ButtonDayStyled";
import ButtonDay from "../src/DatePicker/ButtonDay/ButtonDayStyled";
import React from "react";
export default {
  title: "Example/ButtonDay",
  component: ButtonDay,
    argTypes: {
        primarycolor: {
            name: "primarycolor",
            type: { name: "string", required: true },
            defaultValue: "teal",
            description: "primarycolor of the button : string",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "teal" },
            },
            control: {
                type: "color",
            },
        },
        // tertiary color button control color picker
            tertiarycolor: {
                name: "tertiarycolor",
                type: { name: "string", required: true },
                defaultValue: "white",
                description: "tertiarycolor of the button : string",
                table: {
                    type: { summary: "string" },
                    defaultValue: { summary: "white" },
                },
                control: {
                    type: "color",
                },
            },
    }
} as ComponentMeta<typeof ButtonDay>;

const props: IButtonDay = {
  children: 1,
  onChange: action("onChange"),
  value: new Date(),
  primarycolor: "teal",
  tertiarycolor: "white",
  dayNumber: 1,
  mainArray: true,
  setIsOpen: () => {},
  setInputText: () => {},
  formatDate: "dd/MM/yyyy",
  minDate: new Date("01-01-2022"),
  maxDate: new Date("01-01-2023"),
};
const Template: ComponentStory<typeof ButtonDay> = (arg) => (
  <ButtonDay {...arg} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = props;
