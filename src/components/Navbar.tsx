import { useEffect, useState } from "react";
import { accountState } from "@/atoms/account";
import { useConnectWallet } from "@/hooks/useConnectWallet";

import { WalletIcon } from "./icons/WalletIcon";
import { useRecoilValue } from "recoil";

const useHasUserScolled = () => {
  const [scrolled, setScrolled] = useState(false);

  const onHandleScroll = () => {
    setScrolled(window.scrollY >= 35);
  };

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll);

    return () => {
      window.removeEventListener("scroll", onHandleScroll);
    };
  });

  return scrolled;
};

export function Navbar() {
  const scrolled = useHasUserScolled();
  const account = useRecoilValue(accountState);
  const onConnectWallet = useConnectWallet();

  return (
    <nav
      id="header"
      className={`fixed w-full z-30 top-0 text-white py-2 border-b  transform transition duration-300 ease-in-out ${
        scrolled
          ? "bg-white border-b-[#d53369]"
          : "bg-transparent border-b-gray-100"
      } `}
    >
      <div className="w-full container mx-auto flex items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className={`${
              scrolled ? "gradient-text" : "text-white"
            } no-underline hover:no-underline font-bold text-2xl lg:text-4xl transform transition duration-300 ease-in-out`}
            href="/"
          >
            Sneak Demo
          </a>
        </div>
        <button
          className={`group mx-auto flex items-center lg:mx-0 ${
            scrolled
              ? "border-[#d53369] hover:bg-[#d53369]"
              : "border-white hover:bg-white"
          } border rounded-lg mt-4 lg:mt-0 py-3 px-4 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
          onClick={onConnectWallet}
        >
          <WalletIcon
            className={`${
              scrolled
                ? "fill-[#d53369]"
                : "fill-transparent group-hover:fill-[#d53369]"
            } h-7 w-7 mr-2 transform transition duration-300 ease-in-out`}
          />
          <span
            className={`${
              scrolled
                ? "text-[#d53369] group-hover:text-white"
                : "text-gray-800"
            } font-bold transform transition duration-300 ease-in-out`}
          >
            {account ? "Connected" : "Wallet Connect"}
          </span>
        </button>
      </div>
    </nav>
  );
}
