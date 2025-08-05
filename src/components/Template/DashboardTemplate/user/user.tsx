import { useMemo } from "react";
import Stats from "../../../common/Stats/stats";
import "./user.modules.scss";
import Table from "../../../common/Table/table";
import type { User } from "../../../../types/types";
import userData from "../../../../data/mock_users.json";
import { useUserStatusStats } from "../../../../hooks/useUserStatusStats";

function UserTemplate() {
  const data = useMemo(() => userData.users as User[], []);
  const { active, pending, inactive } = useUserStatusStats(data);

  return (
    <div className="users-container">
      <h2>Users</h2>
      <div className="users">
        <Stats
          icon="/svg/icons/all-users.svg"
          title="users"
          value={data.length}
        />
        <Stats
          icon="/svg/icons/active-users.svg"
          title="active users"
          value={active}
        />
        <Stats
          icon="/svg/icons/loan-users.svg"
          title="Pending users "
          value={pending}
        />
        <Stats
          icon="/svg/icons/saving-users.svg"
          title="Inactive users"
          value={inactive}
        />
      </div>

      <Table users={data} />
    </div>
  );
}

export default UserTemplate;
