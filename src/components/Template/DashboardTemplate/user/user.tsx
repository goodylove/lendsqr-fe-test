import React from "react";
import Stats from "../../../common/Stats/stats";
import "./user.modules.scss";
import Table from "../../../common/Table/table";

function User() {
  return (
    <div className="users-container">
      <h2>Users</h2>
      <div className="users">
        <Stats icon="/svg/icons/all-users.svg" title="users" value="2,453" />
        <Stats
          icon="/svg/icons/active-users.svg"
          title="active users"
          value="2,453"
        />
        <Stats
          icon="/svg/icons/loan-users.svg"
          title="Users with Loans"
          value="12,453"
        />
        <Stats
          icon="/svg/icons/saving-users.svg"
          title="Users with savings"
          value="102,453"
        />
      </div>

      <Table/>
    </div>
  );
}

export default User;
