import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import type { User } from "../../../types/types";
import "./table.modules.scss";
import { PiFunnelSimpleBold } from "react-icons/pi";
import { dateFormatWithTime } from "../../../utils/helper";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Pagination from "../pagination/pagination";
import useSelectedUser from "../../../hooks/useSelectedUser";
import { useNavigate } from "react-router-dom";

type TableProps = {
  users: User[]
}
function Table({ users }: TableProps) {
  const { setSelectedUser } = useSelectedUser();
  const navigate = useNavigate();

  function handleSelectUser(user: User) {
    setSelectedUser(user);
    navigate(`/dashboard/users/${user.id}`);
  }

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "organization",

        header: () => (
          <div className="th-icon-header">
            <span>Organization</span>
            <PiFunnelSimpleBold className="icon" />
          </div>
        ),
      },
      {
        accessorKey: "username",
        header: () => (
          <div className="th-icon-header">
            <span>Username</span>
            <PiFunnelSimpleBold className="icon" />
          </div>
        ),
      },
      {
        accessorKey: "email",
        header: () => (
          <div className="th-icon-header">
            <span>Email</span>
            <PiFunnelSimpleBold className="icon" />
          </div>
        ),
      },
      {
        accessorKey: "phoneNumber",
        header: () => (
          <div className="th-icon-header">
            <span>Phone Number</span>
            <PiFunnelSimpleBold className="icon" />
          </div>
        ),
      },
      {
        accessorKey: "dateJoined",
        header: () => (
          <div className="th-icon-header">
            <span>Date Joined</span>
            <PiFunnelSimpleBold className="icon" />
          </div>
        ),
        cell: ({ row }) => {
          const { date, time } = dateFormatWithTime(
            new Date(row.original.dateJoined)
          );
          return (
            <div style={{ display: "flex", gap: "5px", width: "fit" }}>
              <p>{date}</p>
              <p>{time}</p>
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: () => (
          <div className="th-icon-header">
            <span>Status</span>
            <PiFunnelSimpleBold className="icon" />
          </div>
        ),
        cell: ({ row }) => {
          const status = row.original.status?.toLowerCase(); // ensure it's lowercase
          return (
            <span className={`status ${status}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          );
        },
      },
      {
        id: "actions",
        // header: () => <span>Actions</span>,
        cell: () => {
          return <PiDotsThreeOutlineVerticalFill size={20} />;
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className="table-container">
        <table className="table-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                onClick={() => {
                  handleSelectUser(row.original);
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination table={table} />
    </>
  );
}

export default Table;
