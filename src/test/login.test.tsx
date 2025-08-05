import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import LoginTemplate from "../components/Template/LoginTemplate/login";

describe("LoginTemplate", () => {
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let loginBtn: HTMLButtonElement;

  beforeEach(() => {
    render(
      <MemoryRouter>
        <LoginTemplate />
      </MemoryRouter>
    );
    emailInput = screen.getByPlaceholderText(/email/i);
    passwordInput = screen.getByPlaceholderText(/password/i);
    loginBtn = screen.getByRole("button", { name: /Login/i });
  });

  test("login is disabled when email or password is empty", async () => {
    const user = userEvent.setup();

    expect(loginBtn).toBeDisabled();

    await user.type(emailInput, "user@gmail.com");
    expect(loginBtn).toBeDisabled();

    await user.type(passwordInput, "password12");
    expect(loginBtn).toBeEnabled();
  });

  test("login is enabled when email and password are filled", async () => {
    const user = userEvent.setup();

    await user.type(emailInput, "user@gmail.com");
    await user.type(passwordInput, "password12");

    expect(emailInput.value).toBe("user@gmail.com");
    expect(passwordInput.value).toBe("password12");
    expect(loginBtn).toBeEnabled();
  });
});
