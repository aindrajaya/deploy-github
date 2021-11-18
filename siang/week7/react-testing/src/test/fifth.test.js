import { render, screen } from "@testing-library/react"
import App from "../App"

describe("test queryBy and findBy", () => {
  test("check the the user null or not", async () => {
    render(<App />)
    const txt = screen.queryByText(/Selamat datang/)
    expect(txt).toBeNull() //dikosongkan dulu
    const txtAfter1s = await screen.findByText(/Selamat datang/);
    expect(txtAfter1s).toBeInTheDocument()
  })
})