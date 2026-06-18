import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableFooter } from "./TableFooter";

const meta: Meta<typeof TableFooter> = {
  title: "Components/TableFooter",
  component: TableFooter,
};

export default meta;

type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    text: "JordanLerat.dev",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Footer",
    disabled: true,
  },
};