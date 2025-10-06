import { productType } from "@/constants/data";
import Link from "next/link";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-5 w-full">
      {/* Category Buttons for mobile */}
      <div className="flex flex-wrap w-full gap-3 text-sm font-semibold md:w-auto">
        {productType?.map((item, index) => (
          <button
            onClick={() => onTabSelect(item?.title)}
            key={item?.title}
            className={`border border-shop_light_green/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${
              selectedTab === item?.title
                ? "bg-shop_light_green text-white border-shop_light_green"
                : "bg-shop_light_green/20"
            } 
            ${index === 2 ? "mr-auto" : ""}`} // ensures first 3 stay in top row
          >
            {item?.title}
          </button>
        ))}

        {/* ✅ See all button on mobile (2nd line beside last item) */}
        <div className="block md:hidden">
          <Link
            href="/shop"
            className="border border-shop_light_green/30 px-6 py-2 text-sm font-semibold rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect"
          >
            See all
          </Link>
        </div>
      </div>

      {/* ✅ Desktop & medium screen version (unchanged) */}
      <div className="hidden md:block md:flex-shrink-0">
        <Link
          href="/shop"
          className="border border-shop_light_green/30 
                     px-6 py-3 text-sm font-semibold
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
