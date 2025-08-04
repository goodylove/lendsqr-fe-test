import React, { type Dispatch, type SetStateAction } from "react";
import SideBarItem from "./sideBarItems/sideBarItems";
import "./sideBar.modules.scss";
import { SIDE_BAR_LINKS } from "../../../constants/sidebarContent";
import type { Links, SideBarLinks } from "../../../types/types";
import { Link } from "react-router-dom";

type SideBarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};
function SideBar({ sidebarOpen, setSidebarOpen }: SideBarProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      )
        setSidebarOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <div
      className={`sideBar-container ${sidebarOpen ? "isOpen" : ""}`}
      ref={containerRef}
    >
      <SideBarItem
        icons="/svg/icons/briefcase.svg"
        text="Switch Organization"
        url=""
        isIconAdded
      />
      <ul className="sideBar-Nav">
        {SIDE_BAR_LINKS.map((navItem: SideBarLinks, index: number) => (
          <li key={index} className="sideBar-list">
            <p className="sideBar-title">{navItem.title}</p>
            {navItem.links.map((links: Links, index: number) => (
              <Link
                key={index}
                to={links.url}
                className="link"
                onClick={() => setSidebarOpen(false)}
              >
                <SideBarItem
                  key={index}
                  icons={links.icon}
                  text={links.title}
                  url={links.url}
                />
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
