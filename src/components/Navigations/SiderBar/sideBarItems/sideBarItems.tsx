import React from "react";
import "./sideBarItems.modules.scss";
import { PiCaretDown } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";

type SideBarItemsProps = {
  icons: string;
  text: string;
  isIconAdded?: boolean;
  url: string;
};
function SideBarItem({ icons, text, isIconAdded, url }: SideBarItemsProps) {
  const { pathname } = useLocation();

  const isActive = pathname === url || pathname.startsWith(`/${url}/`);
  return (
    <NavLink
      end
      to={url}
      className={`sidebar-items ${isActive ? "isActive" : "not-active"}`}
    >
      <img src={icons} alt={text} className="icons" />
      <span className="text">{text}</span>
      {isIconAdded && <PiCaretDown size={16} />}
    </NavLink>
  );
}

export default SideBarItem;
