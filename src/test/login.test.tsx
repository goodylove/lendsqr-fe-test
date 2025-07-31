import "@testing-library/jest-dom";


import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginTemplate from "../components/Template/LoginTemplate/login";
import { expect, test } from "vitest";

describe("LoginTemplate", () => {
  test("login is disabled when email or password is empty", async() => {
    render(<LoginTemplate />);

    const loginBtn = screen.getByRole("button", { name: /Login/i });
    expect(loginBtn).toBeDisabled();

    const emailInput = screen.getByPlaceholderText(/email/i);

    
    await userEvent.type(emailInput, "user@gmail.com");
    expect(loginBtn).toBeDisabled();
    const passwordInput = screen.getByPlaceholderText(/password/i);

  
await userEvent.type(passwordInput, "lendsqr");
    expect(loginBtn).toBeEnabled();
  });
});
