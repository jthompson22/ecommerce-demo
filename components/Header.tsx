import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import logo from "@/public/logo.png"
const Header = () => {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];

  return (
    <div className="w-full shadow-lg">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0 ">
        <Link href="/events">  <Image src={logo} alt="logo" className="w-36"/>
         </Link>
       
        {/* menu  */}
       
        <div className="basis-1/2"> </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item text-right items-end">
          <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Look for events
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;