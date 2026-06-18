import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: "Full Stack Web Developer",
    backgroundColor: "#050816",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Text",
    disabled: true,
  },
};