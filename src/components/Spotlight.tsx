import { Button, Group } from "@mantine/core";
import {
  openSpotlight,
  SpotlightAction,
  SpotlightProvider,
} from "@mantine/spotlight";
import type { FC } from "react";
import { IconHome, IconDashboard, IconFileText } from "@tabler/icons";

const actions: SpotlightAction[] = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: <IconHome size={18} />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <IconDashboard size={18} />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <IconFileText size={18} />,
  },
];

export const Spotlight: FC = () => {
  return (
    <SpotlightProvider shortcut={["mod + K"]} actions={actions}>
      <Group position="center">
        <Button onClick={() => openSpotlight()}>Open spotlight</Button>
      </Group>
    </SpotlightProvider>
  );
};
