import React from "react";
import CardComponent from "../components/CardComponent";

export default {
  title: "Components/Cards",
  component: CardComponent,
  argTypes: {
    cardData: {
      control: "object",
      description: "Data object for the card component",
    },
  },
  args: {
    cardData: {
      id: 1,
      task: "3 Recipes Added",
      time: "Today, 04:45pm: Unidentified face detected",
      location: "Coimbatore branch",
    },
  },
};

const Template = (args) => <CardComponent {...args} />;

export const Default = Template.bind({});
