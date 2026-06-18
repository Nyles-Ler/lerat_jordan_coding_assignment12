import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Portfolio Project",
    content: "A modern React and TypeScript component library.",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Project",
    content: "This card is disabled.",
    disabled: true,
  },
};