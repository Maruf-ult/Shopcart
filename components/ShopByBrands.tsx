import { urlFor } from "@/sanity/lib/image";
import { getAllBrands } from "@/sanity/queries";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Title } from "./ui/text";

const extraData = [
  {
    title: "Free Delivery",
    description: "Free shipping over $100",
    icon: <Truck size={45} />,
  },
  {
    title: "Free Return",
    description: "Hassle-free returns within 30 days",
    icon: <GitCompareArrows size={45} />,
  },
  {
    title: "Customer Support",
    description: "Friendly 24/7 customer support",
    icon: <Headset size={45} />,
  },
  {
    title: "Money Back Guarantee",
    description: "Quality checked by our team",
    icon: <ShieldCheck size={45} />,
  },
];

const ShopByBrands = async () => {
  const brands = await getAllBrands();

  return (
    <div className="mb-10 lg:mb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <Title>Shop By Brands</Title>
        <Link
          href="/shop"
          className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_green hoverEffect"
        >
          View all
        </Link>
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {brands?.map((brand) => (
          <Link
            key={brand?._id}
            href={`/brand/${brand?.slug?.current}`}
            className="bg-white w-full h-24 flex items-center justify-center rounded-md overflow-hidden hover:shadow-lg shadow-shop_dark_green/20 hoverEffect"
          >
            {brand?.image && (
              <Image
                src={urlFor(brand.image).url()}
                alt={brand?.title || "Brand image"}
                width={120}
                height={80}
                className="w-28 h-16 object-contain"
              />
            )}
          </Link>
        ))}
      </div>

      {/* Extra Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 py-5 px-2 shadow-sm hover:shadow-shop_light_green/20">
        {extraData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 group text-lightColor hover:text-shop_light_green"
          >
            <span className="inline-flex scale-100 group-hover:scale-90 hoverEffect">
              {item.icon}
            </span>
            <div className="text-sm">
              <p className="text-darkColor/80 font-bold capitalize">
                {item.title}
              </p>
              <p className="text-lightColor">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;