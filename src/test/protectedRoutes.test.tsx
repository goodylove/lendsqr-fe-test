import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { expect, test, } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import ProtectedRoutes from "../components/ProtectedRoutes/protectedRoutes";

vi.mock("../hooks/useSelectedUser", async () => {
  const actual = await vi.importActual("../hooks/useSelectedUser");
  return {
    ...actual,
    useAuthUser: vi.fn(),
  };
});

import { useAuthUser } from "../hooks/useSelectedUser";

const DummyPage = () => <h2>Dashboard page</h2>;
const LoginPage = () => <h2>Welcome!</h2>;

describe("ProtectedRoutes", () => {
  test("redirect to login if user is not authenticated", () => {
    vi.mocked(useAuthUser).mockReturnValue({
      getAuthUser: () => null,
      setAuthUser: ()=>null,
    });
    render(
      <MemoryRouter initialEntries={["/dashboard"]} >
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <DummyPage />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/welcome!/i)).toBeInTheDocument();
  });

  test("renders children if user is authenticated",()=>{
     vi.mocked(useAuthUser).mockReturnValue({
       getAuthUser: () => "authUser",
       setAuthUser: () => null,
     });

      render(
      <MemoryRouter initialEntries={["/dashboard"]} >
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <DummyPage />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Dashboard page/i)).toBeInTheDocument();
  });

  
});
