import {fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("memunculkan html document dari App.js", () => {
  render(<App />) //mensimulasikan render App.js dari browser ke terminal
  //screen.debug() //menampilkan semua element App.js di terminal
  const btn = screen.getByRole("button") //menyimpan dan memilih element button yg ada di terminal
  fireEvent.click(btn) //mensimulasikan tombol di klik
  //screen.debug() //menampilkan semua element App.js di terminal setalah button di klik
}) 

