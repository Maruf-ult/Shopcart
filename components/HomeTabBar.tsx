import { productType } from "@/constants/data";
import Link from "next/link";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
      <div className="flex flex-wrap gap-3 text-sm font-semibold w-full">
        {productType?.map((item) => (
          <button
            onClick={() => onTabSelect(item?.title)}
            key={item?.title}
            className={`border border-shop_light_green/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${
              selectedTab === item?.title
                ? "bg-shop_light_green text-white border-shop_light_green"
                : "bg-shop_light_green/20"
            }`}
          >
            {item?.title}
          </button>
        ))}
      </div>

      <div className="md:flex-shrink-0">
        <Link
          href="/shop"
          className="border border-shop_light_green/30 
                     px-36 py-2   /* bigger on mobile */
                     text-base font-semibold
                     md:px-6 md:py-3 md:text-sm /* normal size on desktop */
                     rounded-full 
                     hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect
                     w-full md:w-auto text-center"
        >
          See all
        </Link>
      </div>
    </div>
  );
};

export default HomeTabBar;
