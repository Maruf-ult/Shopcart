"use client";

import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor mr-16">
      {headerData?.map(({ title, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={title}
            href={href}
            className={`relative group transition-colors duration-300 ${
              isActive ? "text-shop_light_green" : "hover:text-shop_light_green"
            }`}
          >
            {title}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-shop_light_green transition-all duration-300 ${
                isActive
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;