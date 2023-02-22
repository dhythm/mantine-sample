import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Box, Button } from "@mantine/core";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Box sx={{ display: "flex", flexDirection: "column", rowGap: 8 }}>
    <Box sx={{ display: "flex", columnGap: 8 }}>
      {["xs", "sm", "md", "lg", "xl"].map((size, i) => (
        <Button key={i} {...args} size={size}>
          Size
        </Button>
      ))}
    </Box>
    <Box sx={{ display: "flex", columnGap: 8 }}>
      {["xs", "sm", "md", "lg", "xl"].map((radius, i) => (
        <Button key={i} {...args} radius={radius}>
          Radius
        </Button>
      ))}
    </Box>
    <Box sx={{ display: "flex", columnGap: 8 }}>
      {[
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
      ].map((color, i) => (
        <Button key={i} {...args} color={color}>
          Color
        </Button>
      ))}
    </Box>
    <Box sx={{ display: "flex", columnGap: 8 }}>
      {[
        "outline",
        "white",
        "light",
        "default",
        "filled",
        "subtle",
        "gradient",
      ].map((variant, i) => (
        <Button key={i} {...args} variant={variant}>
          Variant
        </Button>
      ))}
    </Box>
  </Box>
);

export const $Button = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
