import Link from "next/link";
import SearchInput from "./SearchInput";
import { ChevronDown, CircleUserRound, Heart } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between gap-6 px-6 py-4">
      <Link href="/">
        <Image
          src="/image/logo/logo.svg"
          alt="The Gummy Shop Logo"
          width={150}
          height={50}
          className="cursor-pointer"
        />
      </Link>
      <div className="mx-8 max-w-md flex-1">
        <SearchInput />
      </div>
      <div className="flex items-center gap-3">
        <CircleUserRound className="cursor-pointer" />
        <Heart className="cursor-pointer" />

        <div className="flex gap-1">
          Cart <ChevronDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
