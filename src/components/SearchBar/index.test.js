import { render, screen } from "@testing-library/react";
import SearchBar from "./index";

describe("ui renders", () => {
  it("ui renders correctly", async () => {
    render(<SearchBar />);
    expect(
      screen.getByPlaceholderText("SEARCH(Client Name / Policy Number)")
    ).toBeTruthy();
  });
});
