import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button2 } from "./Button2";

const meta = {
  title: "Button2",
  component: Button2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "text" },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    onClick: fn(),
    size: "w-auto h-auto",
    backgroundColor: "blue-500",
  },
} satisfies Meta<typeof Button2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "w-15 h-15",
    backgroundColor: "red-500",
    label: "크고 붉은 버튼",
    onClick: fn(() => {
      console.log("큰 버튼 클릭");
    }),
  },
};

export const Small: Story = {
  args: {
    size: "w-6 h-6",
    backgroundColor: "yellow-500",
    label: "작고 노란 버튼",
    onClick: fn(() => {
      console.log("작은 버튼 클릭");
    }),
  },
};

export const Normal: Story = {
  args: {
    size: "w-10 h-10",
    backgroundColor: "black",
    label: "중간 니가 버튼",
    onClick: fn(() => {
      console.log("중간 버튼 클릭");
    }),
  },
};

export const Default: Story = {
  args: {
    label: "기본 버튼",
  },
};
