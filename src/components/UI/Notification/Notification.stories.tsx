import { Meta, StoryObj } from "@storybook/react";

import { Notification, NotificationType } from "./Notification.tsx";

const meta = {
  title: "Example/Notification",
  component: Notification,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ transform: "translateZ(0)", height: "200px" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: NotificationType.INFO,
  },
};

export const Error: Story = {
  args: {
    type: NotificationType.ERROR,
  },
};

export const Info: Story = {
  args: {
    type: NotificationType.INFO,
  },
};

export const Success: Story = {
  args: {
    type: NotificationType.SUCCESS,
  },
};

export const Warning: Story = {
  args: {
    type: NotificationType.WARNING,
  },
};
