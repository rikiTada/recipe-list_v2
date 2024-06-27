import type { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/layout/header";
import { HomeIcon } from "lucide-react";

const meta = {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Recipe List",
    icon: <HomeIcon />,
  },
  argTypes: {
    title: { control: "text" },
    icon: { control: "object" },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Header title="Recipe List" icon={<HomeIcon />} />,
};
