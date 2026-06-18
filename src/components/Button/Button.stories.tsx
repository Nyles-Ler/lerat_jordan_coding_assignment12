import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "View My Work",
    backgroundColor: "#050816",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled",
    disabled: true,
  },
};