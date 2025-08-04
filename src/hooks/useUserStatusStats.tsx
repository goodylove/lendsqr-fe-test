import { useMemo } from "react";
import type { User } from "../types/types";

export function useUserStatusStats(data: User[]) {
  return useMemo(() => {
    return data.reduce(
      (acc, user) => {
        const status = user.status.toLowerCase();

        if (status === "active") acc.active++;
        else if (status === "pending") acc.pending++;
        else if (status === "inactive") acc.inactive++;

        return acc;
      },
      { active: 0, pending: 0, inactive: 0 }
    );
  }, [data]);
}
