import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Login from "../pages/login"

test("renders login form", () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();
});