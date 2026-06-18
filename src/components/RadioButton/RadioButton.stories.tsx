import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: "React Developer",
    name: "role",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Option",
    name: "role",
    disabled: true,
  },
};