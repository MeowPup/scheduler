import React from "react";
// import axios from "axios";

import { render, cleanup, waitForElement, fireEvent, getByAltText, prettyDOM, getAllByTestId, getByPlaceholderText, getByText, queryByText, queryByAltText, getAllByAltText } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

describe("Application Tests", () => {

it("defaults to Monday and changes the schedule when a new day is selected", async () => {
  const { getByText } = render(<Application />);

  return waitForElement(() => getByText("Monday"))
  .then(() => {
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
});

it.only("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
  const { container } = render(<Application />);

  await waitForElement(() => queryByText(container, "Archie Cohen"));

  const appointments = getAllByTestId(container, "appointment");
  const appointment = appointments[0];

  fireEvent.click(getByAltText(appointment, "Add"));

  fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
    target: { value: "Lydia Miller-Jones" }
  });
  fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

  fireEvent.click(getByText(appointment, "Save"));

  expect(getByText(appointment, "Saving")).toBeInTheDocument();

  await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));
  
  const day = getAllByTestId(container, "day").find(day =>
    queryByText(day, "Monday")
  );

  expect(getByText(day, "no spots remaining")).toBeInTheDocument();
});

it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
const { container } = render(<Application />);

const appointment = getAllByTestId(container, "appointment").find(appointment =>
  queryByText(appointment, "Archie Cohen"));

  fireEvent.click(queryByAltText(appointment, "Delete"));

  await waitForElement(() => getByText(container, "Confirm deletion?"))

  const confirm = getByText(container, "Confirm");
  
  fireEvent.click(confirm);

  getByText(container, "Deleting");

  await waitForElement(() => getAllByAltText(container, "Add"));

  const days = getAllByTestId(container, "day")
  const monday = days.find(day => queryByText(day, "Monday"));

  expect(getByText(monday, "2 spots remaining").toBeInTheDocument);
});

it("loads data, edits an interview and keeps the spots remaining for Monday by 1", async () => {

});

it("shows the save error when failing to save an appointment", async () => {

});

it("shows the delete error when failing to delete an existing appointment", async () => {

});

});