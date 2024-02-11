import React from "react";
import CardComponent from "../components/CardComponent";

export default {
  component: CardComponent,
  title: "Components/Cards",
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
