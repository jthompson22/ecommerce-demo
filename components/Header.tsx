import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import logo from "@/public/logo.png"
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];

  return (
    <div className="w-full sticky  top-0 bg-white z-50">
      <nav className="container relative flex flex-wrap items-center justify-between  mx-auto lg:justify-between xl:px-0 ">
        <Link href="/">  <Image src={logo} alt="logo" className=" w-28" priority/>
         </Link>
       
        {/* menu  */}
       
        <div className="basis-1/2"> </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item text-right items-end">
          <Link href="/" className="text-slate-600">
          Shop T-shirts
          </Link>
          <Link href="/" className="text-slate-600" >
          Shop Pants
          </Link>
          <Link href="/"  className="text-slate-600">
          Shop Albums
          </Link>
          <ShoppingCart/>
        </div>
      </nav>
    </div>
  );
}

export default Header;