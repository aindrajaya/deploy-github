import {render, screen } from "@testing-library/react";
import App from "../App";

//"selecting/ memilih komponent"
describe("selecting element and expect value", () => {
  test("memastikan ketika render pertama ada text Tulisan sedang Sembunyi", () => {
    render(<App />)
    const txt = screen.getByText("Tulisan sedang Sembunyi")
    expect(txt).toBeInTheDocument()
  })
  test("memastikan button yg muncul pada saat pertama kali render adalah Munculkan", () => {
    render(<App />)
    const btnText = screen.getByText("Munculkan")
    expect(btnText).toBeInTheDocument()
  })
})