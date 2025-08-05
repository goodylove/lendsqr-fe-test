import { useEffect, useMemo, useState } from "react";
import Stats from "../../../common/Stats/stats";
import "./user.modules.scss";
import Table from "../../../common/Table/table";
import type { User } from "../../../../types/types";
import userData from "../../../../data/mock_users.json";
import { useUserStatusStats } from "../../../../hooks/useUserStatusStats";
import { useSearchParams } from "react-router-dom";

function UserTemplate() {
  const data = useMemo(() => userData.users as User[], []);

  const [searchParam] = useSearchParams();

  const search = searchParam.get("search")?.toLowerCase() || "";
  const [filteredUsers, setFilteredUsers] = useState<User[]>(data);
  const { active, pending, inactive } = useUserStatusStats(filteredUsers);

  useEffect(() => {
    if (!search) {
      setFilteredUsers(data);
    } else {
      const result = data.filter(
        (user) =>
          user.email.toLowerCase().includes(search) ||
          user.username.toLowerCase().includes(search) ||
          user.organization.toLowerCase().includes(search) ||
          user.status.toLowerCase().includes(search) ||
          user.id.toLowerCase().includes(search)
      );
      setFilteredUsers(result);
    }
  }, [search, data]);

  return (
    <div className="users-container">
      <h2>Users</h2>

      {filteredUsers.length === 0 ? (
        <div className="empty-state">
          <img src="/download.png" alt="No user selected" />
          <h2>No Users Found</h2>
        </div>
      ) : (
        <>
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

          <Table users={filteredUsers} />
        </>
      )}
    </div>
  );
}

export default UserTemplate;
