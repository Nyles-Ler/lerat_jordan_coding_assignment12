import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Full Stack Developer",
    backgroundColor: "#050816",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Label",
    disabled: true,
  },
};