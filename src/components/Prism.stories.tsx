import React from "react";
import type { ComponentStory, ComponentMeta, Meta } from "@storybook/react";
import { Prism } from "@mantine/prism";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Prism",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  component: Prism,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Prism>;

const deleted = { color: "red", label: "-" };
const added = { color: "green", label: "+" };

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}

function Usage() {
  return <ActionIcon>Hello</ActionIcon>;
}
`;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Prism> = (args) => (
  <Prism
    language="tsx"
    withLineNumbers
    highlightLines={{
      3: deleted,
      4: deleted,
      5: deleted,
      7: added,
      8: added,
      9: added,
    }}
  >
    {code}
  </Prism>
);

export const $Prism = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
