import { useCallback } from "react";
import type { User } from "../types/types";

const SELECTED_USER_KEY = "selectedUser";
const AUTH_USER_KEY = "AuthUser";
function useSelectedUser() {
  const setSelectedUser = useCallback((user: User) => {
    localStorage.setItem(SELECTED_USER_KEY, JSON.stringify(user));
  }, []);

  const getSelectedUser = useCallback(() => {
    const user = localStorage.getItem(SELECTED_USER_KEY);
    return user ? JSON.parse(user) : null;
  }, []);

  return { setSelectedUser, getSelectedUser };
}

export default useSelectedUser;
export function useAuthUser() {
  const setAuthUser = useCallback((email: string) => {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(email));
  }, []);

  const getAuthUser = useCallback(() => {
    const user = localStorage.getItem(AUTH_USER_KEY);
    return user ? JSON.parse(user) : null;
  }, []);

  return { setAuthUser, getAuthUser };
}
