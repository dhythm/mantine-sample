import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { RichEditor } from "./RichEditor";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/RichEditor",
  component: RichEditor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RichEditor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RichEditor> = (args) => <RichEditor />;

export const $RichEditor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
