import { userEvent, within } from "@storybook/testing-library";
import SignIn from "../components/SignIn";

import { expect } from "@storybook/jest";

export default {
  component: SignIn,
  title: "Components/SignIn",
};

export const EmptyForm = {};

export const FilledForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("name"), "John Doe");

    await userEvent.type(canvas.getByTestId("comp_name"), "XYZ");

    await userEvent.click(canvas.getByRole("button"));
  },
};
