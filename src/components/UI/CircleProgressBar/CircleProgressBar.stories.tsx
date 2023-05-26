import { Meta, StoryObj } from "@storybook/react";

import { CircleProgressBar } from "./CircleProgressBar.tsx";

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

  render: (args) => (
    <div
      style={{
        width: "200px",
        height: "200px",
      }}
    >
      <CircleProgressBar {...args} />
    </div>
  ),
};
