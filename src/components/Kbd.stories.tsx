import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Kbd } from "@mantine/core";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Kbd",
  component: Kbd,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Kbd>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Kbd> = (args) => (
  <>
    <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
  </>
);

export const $Kbd = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
