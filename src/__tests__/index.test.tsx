import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

it("has selected theme toggle", async () => {
  render(<Home />);
  expect(screen.getByRole("checkbox", { name: /toggle theme/i })).toBeInTheDocument();
});
