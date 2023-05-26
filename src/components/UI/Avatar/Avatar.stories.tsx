import { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar.tsx";
import { AvatarSize } from "./types.ts";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: AvatarSize.SM,
  },
};

export const Large: Story = {
  args: {
    size: AvatarSize.LG,
  },
};
