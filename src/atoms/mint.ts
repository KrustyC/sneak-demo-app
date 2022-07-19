import { atom } from "recoil";

export const isNFTMintingState = atom<boolean>({
  key: "isNFTMintingState",
  default: false,
});

export const nftMintingSuccessState = atom<boolean>({
  key: "nftMintingSuccessState",
  default: false,
});

export const mintingErroState = atom<Error | undefined>({
  key: "mintingErroState",
  default: undefined,
});

export const txnHashState = atom<string | undefined>({
  key: "txnHashState",
  default: undefined,
});
