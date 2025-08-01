import React from "react";
import "./sideBarItems.modules.scss";
import { PiCaretDown } from "react-icons/pi";

type SideBarItemsProps = {
  icons: string;
  text: string;
  isIconAdded?: boolean;
};
function SideBarItem({ icons, text, isIconAdded }: SideBarItemsProps) {
  return (
    <div className="sidebar-items">
      <img src={icons} alt={text} className="icons" />
      <span className="text">{text}</span>
      <PiCaretDown className={`${isIconAdded ? "show" : "hide"}`} size={16} />
    </div>
  );
}

export default SideBarItem;
