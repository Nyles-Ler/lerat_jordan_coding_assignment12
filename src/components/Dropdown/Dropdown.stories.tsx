import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: ["React", "TypeScript", "Storybook"],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: ["React", "TypeScript", "Storybook"],
    disabled: true,
  },
};