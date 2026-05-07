import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationElement({
  Icon,
  label,
  url,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  url: string;
}) {
  return (
    <NavLink
      to={url}
      className={`flex p-2 flex-col max-w-fit justify-center active:bg-white/20 transition-all duration-300 items-center cursor-pointer rounded-sm`}
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`${isActive ? "text-[#7339E6]" : "text-[#6F7074]"}`}
          />
          <span
            className={`text-center text-[15px] font-medium ${isActive ? "text-[#7339E6]" : "text-[#6F7074]"}`}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}
