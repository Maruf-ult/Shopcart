"use client";

import { headerData } from "@/constants/data";
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { useOutsideCLick } from "@/hooks";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const router = useRouter();
  const sidebarRef = useOutsideCLick<HTMLDivElement>(onClose);

  const handleNavigation = (href: string) => {
    if (href !== pathname) {
      router.push(href);
    }
    setTimeout(() => {
      onClose();
    }, 500); 
  };

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/80 shadow-xl transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect"
          >
            <X />
          </button>
        </div>

        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <button
              key={item?.title}
              onClick={() => handleNavigation(item?.href)}
              className={`text-left hover:text-shop_light_green hoverEffect ${
                pathname === item?.href ? "text-white/70" : ""
              }`}
            >
              {item?.title}
            </button>
          ))}
        </div>

        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;