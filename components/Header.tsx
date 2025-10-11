import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Container from "./Container";
import FavouriteButton from "./FavouriteButton";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SignIn from "./SignIn";
// import { currentUser } from '@clerk/nextjs/server'
import { getMyOrders } from "@/sanity/queries";
import { ClerkLoaded } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Logs } from "lucide-react";
// import { SignedIn, UserButton } from '@clerk/clerk-react'
const Header = async () => {
  //      const user = await currentUser();
  const { userId } = await auth();
  let orders = null;
  if (userId) {
    orders = await getMyOrders(userId);
  }

  return (
    <header className="bg-white/70 py-5 sticky top-0 z-50  backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto mid:w-1/3 flex items-center justify-end gap-5">
          <CartIcon />
          <FavouriteButton />
          <ClerkLoaded>
            <SignedOut>
              <SignIn />
            </SignedOut>
            <SignedIn>
              <Link
                className="group relative hover:text-shop_light_green hoverEffect "
                href={"/orders"}
              >
                <Logs />
                <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                  {orders?.length ? orders?.length : 0}
                </span>
              </Link>
              <UserButton />
            </SignedIn>
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
