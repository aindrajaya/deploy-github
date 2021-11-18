import {fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("tampilan setelah event klik button", () => {
  test('tulisan menjadi Tulisan sedang Muncul', () => {
    render(<App />)
    const btn = screen.getByRole("button")
    fireEvent.click(btn)
    const txt = screen.getByText("Tulisan sedang Muncul")
    expect(txt).toBeInTheDocument()
  })
  test('tulisan di button menjadi Sembunyikan', () => {
    render(<App />)
    const btn = screen.getByRole("button")
    fireEvent.click(btn)
    const btnText = screen.getByText("Sembunyikan")
    expect(btnText).toBeInTheDocument()
  })
})