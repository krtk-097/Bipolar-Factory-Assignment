import React from "react";
import ChartComponent from "../components/ChartComponent";

export default {
  title: "Components/Charts",
  component: ChartComponent,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    super_healthy_camera: { control: "number" },
    healthy_camera: { control: "number" },
    warning_camera: { control: "number" },
    danger_camera: { control: "number" },
  },
};

const Template = (args) => <ChartComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  super_healthy_camera: 70,
  healthy_camera: 20,
  warning_camera: 10,
  danger_camera: 100,
};
