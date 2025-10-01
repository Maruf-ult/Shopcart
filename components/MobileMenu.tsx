"use client";

import React, { useState } from "react";
import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-label="Toggle mobile sidebar"
        className="md:hidden"
      >
        <AlignLeft className="hover:text-darkColor hoverEffect hover:cursor-pointer" />
      </button>

      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <SideMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>
      )}
    </>
  );
};

export default MobileMenu;