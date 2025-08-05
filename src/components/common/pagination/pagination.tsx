
import "./pagination.modules.scss";
import type { Table } from "@tanstack/react-table";
import type { User } from "../../../types/types";
import { useScreenWidth } from "../../../hooks/useScreenWidth";

function Pagination({ table }: { table: Table<User> }) {
  const pageCount = table.getPageCount();
  const pageIndex = table.getState().pagination.pageIndex;

  const screenWidth = useScreenWidth();

  function getPaginationRange(
    current: number,
    total: number,
    screenWidth: number
  ): (number | string)[] {
    const delta = screenWidth < 768 ? 1 : 2;
    const range: (number | string)[] = [];
    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);

    range.push(1);
    if (left > 3) range.push("...");

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < total - 1) range.push("...");
    if (total > 1) range.push(total / 2);

    return range;
  }

  return (
    <div className="pagination">
      <div className="controls">
        <span className="entries">Showing</span>
        <select
          id=""
          name="select"
          className="select-con"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[50, 100, 150, 200, 300].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <p>out of {table.getFilteredRowModel().rows.length}</p>
      </div>

      <div className="pagination-controls">
        <button
          className="arrow-btn"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          &lt;
        </button>

        {getPaginationRange(pageIndex + 1, pageCount, screenWidth).map(
          (item, idx) => (
            <button
              key={idx}
              disabled={item === "..."}
              className={`page-btn ${item == pageIndex + 1 ? "active" : ""}`}
              onClick={() => {
                if (typeof item === "number") {
                  table.setPageIndex(item - 1);
                }
              }}
            >
              {item}
            </button>
          )
        )}
        <button
          className="arrow-btn"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
