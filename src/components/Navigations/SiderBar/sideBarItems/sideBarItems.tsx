import React from "react";
import "./sideBarItems.modules.scss";
import { PiCaretDown } from "react-icons/pi";
import { useLocation } from "react-router-dom";

type SideBarItemsProps = {
  icons: string;
  text: string;
  isIconAdded?: boolean;
  url: string;
};
function SideBarItem({ icons, text, isIconAdded, url }: SideBarItemsProps) {
  const { pathname } = useLocation();

  return (
    <div className={`sidebar-items ${pathname === url ? "isActive" : ""}`}>
      <img src={icons} alt={text} className="icons" />
      <span className={`text ${pathname === url ? "isActive" : ""} `}>
        {text}
      </span>
      <PiCaretDown className={`${isIconAdded ? "show" : "hide"}`} size={16} />
    </div>
  );
}

export default SideBarItem;
