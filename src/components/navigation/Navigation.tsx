import React from "react";
import NavigationElement from "./NavigationElement";

import House from "../../assets/ph_house.svg?react";
import User from "../../assets/ph_profile.svg?react";
import Gift from "../../assets/ph_referal.svg?react";

export default function Navigation() {
  return (
    <div className="fixed flex pl-14 pr-14 pt-2.75 pb-2.75 justify-between bottom-0 left-0 right-0 h-fit border border-[#16171C]">
      <NavigationElement Icon={House} label="Home" url="/" />
      <NavigationElement Icon={User} label="Profile" url="/profile" />
      <NavigationElement Icon={Gift} label="Referal" url="/referal" />
    </div>
  );
}
