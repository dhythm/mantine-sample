import React from "react";
import { MantineProvider } from "@mantine/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const decorators = [
//   (Story) => (
//     <MantineProvider
//       theme={{
//         fontFamily: "Open Sans, sans serif",
//         spacing: { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
//       }}
//     >
//       <Story />
//     </MantineProvider>
//   ),
// ];
