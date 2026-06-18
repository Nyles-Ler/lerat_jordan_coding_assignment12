import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/300x200/050816/8a3ffc?text=Portfolio+Image",
    alt: "Portfolio image",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/300x200/1f2933/8a8f98?text=Disabled+Image",
    alt: "Disabled image",
    disabled: true,
  },
};