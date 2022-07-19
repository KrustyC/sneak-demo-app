import { useState } from "react";
import { useRecoilValue } from "recoil";

import {
  mintingErroState,
  isNFTMintingState,
  nftMintingSuccessState,
  txnHashState,
} from "@/atoms/mint";
import { useMintingAction } from "@/hooks/useMintingAction";

import { PlusIcon } from "../icons/PlusIcon";
import { MinusIcon } from "../icons/MinusIcon";
import { Alert } from "./Alert";

interface MintCTAModalProps {
  show: boolean;
  onClose: VoidFunction;
}

export const MintCTAModal: React.FC<MintCTAModalProps> = ({ onClose }) => {
  const [numberOfTokens, setNumberOfTokens] = useState(1);

  const success = useRecoilValue(nftMintingSuccessState);
  const txnHash = useRecoilValue(txnHashState);
  const pending = useRecoilValue(isNFTMintingState);
  const error = useRecoilValue(mintingErroState);
  const onMintNFT = useMintingAction();

  const onIncreaseNumberOfTokens = () => setNumberOfTokens((curr) => curr + 1);
  const onDecreaseNumberOfTokens = () => setNumberOfTokens((curr) => curr - 1);

  const totalCostInEth = (0.0002 * numberOfTokens).toFixed(5);

  const onClickHandler = () => {
    onMintNFT({
      totalCostInEth,
      numberOfTokens,
    });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-3 mx-auto max-w-sm">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between pt-5 pb-2 px-5 border-slate-200 rounded-t">
              <h3 className="text-xl text-black font-semibold">
                How many tokens would you like to mint?
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            <div className="relative p-4 flex flex-col">
              {success && (
                <Alert status="success">
                  Your transaction was succesfull! Check it out{" "}
                  <a
                    className="underline"
                    href={`https://goerli.etherscan.io/tx/${txnHash}`}
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </Alert>
              )}

              {error && <Alert status="error">{error.message}</Alert>}
              <div className="flex items-center justify-center w-full bg-[#FEFEFE]">
                <button
                  disabled={numberOfTokens === 1}
                  className="flex items-center justify-center cursor-pointer disabled:cursor-not-allowed h-12 w-12 font-bolf text-6xl rounded-full text-black border-2 border-black disabled:text-gray-200 disabled:border-gray-200"
                  onClick={onDecreaseNumberOfTokens}
                >
                  <MinusIcon className="h-6 w-6 fill-black" />
                </button>
                <span className="mx-4 text-black font-bold text-3xl">
                  {numberOfTokens}
                </span>
                <button
                  disabled={numberOfTokens === 5}
                  className="flex items-center justify-center cursor-pointer disabled:cursor-not-allowed h-12 w-12 font-bolf text-4xl rounded-full text-black border-2 border-black disabled:text-gray-200 disabled:border-gray-200"
                  onClick={onIncreaseNumberOfTokens}
                >
                  <PlusIcon className="h-6 w-6 fill-black" />
                </button>
              </div>

              <p className="mb-4 mt-6 text-slate-500 text-lg text-center w-full leading-relaxed">
                <b>Esimated cost</b> <br />
                ETH {totalCostInEth} + gas fees
              </p>
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                disabled={pending}
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <button
                disabled={pending}
                className="bg-emerald-500 rounded-full w-[150px] h-[50px] flex items-center justify-center text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClickHandler}
              >
                {!pending ? (
                  `Mint ${numberOfTokens} token${numberOfTokens > 1 ? "s" : ""}`
                ) : (
                  <div className="animate-spin loader ease-linear rounded-full border-4 border-t-4 border-[#FFF] h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};
