import { render, screen } from "@testing-library/react"
import { Tweet } from "./Tweet"

describe("Component: Tweet", () => {
  test("it should display message", () => {
    render(<Tweet text="Hello World" createdAt={new Date()} displayName="Jean-Michel" />)
    expect(screen.getByText("Hello World")).toBeInTheDocument()
    expect(screen.getByText("Jean-Michel")).toBeInTheDocument()
  })
})
