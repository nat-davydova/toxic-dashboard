import { Meta, StoryObj } from "@storybook/react";

import { Notification, NotificationType } from "./Notification.tsx";

const meta = {
  title: "Example/Notification",
  component: Notification,
  tags: ["autodocs"],
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: NotificationType.ERROR,
  },

  render: (args) => (
    <div>
      <Notification {...args} />
    </div>
  ),
};
