import { useState } from "react";
import { useRecoilValue } from "recoil";

import { accountState } from "@/atoms/account";

import { MintCTAModal } from "./MintCTAModal";

export function MintCTA() {
  const account = useRecoilValue(accountState);

  const [wantToMint, setWantToMint] = useState(false);

  const isMintingDisabled = !account;

  const onWantToMint = () => setWantToMint(true);
  const onClose = () => setWantToMint(false);

  return (
    <>
      {wantToMint && <MintCTAModal show={wantToMint} onClose={onClose} />}
      <section className="container mx-auto text-center py-24 mb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Mint you very own NFT right now.
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <h3 className="my-4 text-xl leading-tight">ETH 0.0002 + gas fees</h3>

        <div className="relative flex flex-col items-center group my-4">
          <button
            type="button"
            disabled={isMintingDisabled}
            onClick={onWantToMint}
            className="mx-auto lg:mx-0  h-16 w-32 flex justify-center items-center cursor-pointer bg-white text-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 font-bold rounded-full shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Mint NFT
          </button>

          {isMintingDisabled && (
            <div className="absolute top-[-30px] flex flex-col items-center hidden group-hover:flex">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                You need to connect your wallet to be able to mint an NFT
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-black" />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
