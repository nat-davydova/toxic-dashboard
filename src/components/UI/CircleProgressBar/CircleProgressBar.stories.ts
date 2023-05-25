import { CircleProgressBar } from "./CircleProgressBar.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/CircleProgressBar",
  component: CircleProgressBar,
  tags: ["autodocs"],
} satisfies Meta<typeof CircleProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    strokeWidth: 4,
    progressPercents: 78,
  },
};
