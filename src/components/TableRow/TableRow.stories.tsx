import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableRow } from "./TableRow";

const meta: Meta<typeof TableRow> = {
  title: "Components/TableRow",
  component: TableRow,
};

export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    text: "Table Row",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Row",
    disabled: true,
  },
};