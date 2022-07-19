import { Contract, ethers } from "ethers";
import { useSetRecoilState } from "recoil";

import {
  isNFTMintingState,
  mintingErroState,
  txnHashState,
  nftMintingSuccessState,
} from "@/atoms/mint";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/utils/constants";

interface OnMintNftArgs {
  totalCostInEth: string;
  numberOfTokens: number;
}

export const useMintingAction = () => {
  const setSuccess = useSetRecoilState(nftMintingSuccessState);
  const setTxnHashState = useSetRecoilState(txnHashState);
  const setPending = useSetRecoilState(isNFTMintingState);
  const setError = useSetRecoilState(mintingErroState);

  const onMintNft = async ({
    totalCostInEth,
    numberOfTokens,
  }: OnMintNftArgs) => {
    setPending(true);
    try {
      /**
       * Here we make the assumption that this function can only be called if metamask is installed
       * Otherwise the button that call this should be disabled
       */
      const provider = new ethers.providers.Web3Provider(window.ethereum!);

      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      const nftTxn = await nftContract.mintNFT(numberOfTokens, {
        value: ethers.utils.parseEther(totalCostInEth),
      });

      setTxnHashState(nftTxn.hash);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 25000);
    } catch (err) {
      console.error("error", err);
      setError(err as Error);
    }

    setPending(false);
  };

  return onMintNft;
};
