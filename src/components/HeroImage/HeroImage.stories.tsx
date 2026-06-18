import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/1200x400/050816/8a3ffc?text=Portfolio+Hero",
    alt: "Portfolio hero image",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/1200x400/1f2933/8a8f98?text=Disabled+Hero",
    alt: "Disabled hero image",
    disabled: true,
  },
};