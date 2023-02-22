import { Button as MtButton } from "@mantine/core";
import type { ComponentProps, FC, PropsWithChildren } from "react";

type Props = ComponentProps<PropsWithChildren<typeof MtButton>>;
export const Button: FC<Props> = ({ ...props }) => {
  return <MtButton {...props} />;
};
