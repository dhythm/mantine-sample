import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import { Spotlight } from "./Spotlight";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Spotlight",
  component: Spotlight,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Spotlight>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spotlight> = (args) => <Spotlight />;

export const $Spotlight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
