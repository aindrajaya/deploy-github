import {fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("check available role", () => {
  test("check role", () => {
    render(<App />)
    //screen.getByRole("") //check the available role that can be selected
  })
})