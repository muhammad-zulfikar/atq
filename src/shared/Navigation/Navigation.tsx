import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DESKTOP } from "@/data/navigation";

function Navigation() {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative">
      {NAVIGATION_DESKTOP.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
