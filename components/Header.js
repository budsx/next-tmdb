import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import tmdb from "../public/tmdb.svg";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row px-3 m-5 justify-between sm:items-center ">
      <Image
        className="object-contain"
        src={tmdb}
        alt="Logo"
        width={100}
        height={100}
      />
      <div className="flex flex-grow justify-evenly max-w-2xl mt-5">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDS" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
    </header>
  );
}

export default Header;
