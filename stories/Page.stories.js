import { ArgTypes } from "@storybook/blocks";
import Page from "../components/Page";

const pageArgs = {
  id: "1",
  location: "Coimbatore",
  city: "Coimbatore",
  timezone: "Delhi-India",
  dateAdded: "Aug 03, 2023 12:01:42 PM",
  lastUpdate: "Aug 03, 2023 12:01:42 PM",
};

export default {
  component: Page,
  title: "Components/Page",
  tags: ["autodocs"],
};

export const Default = { args: pageArgs };
