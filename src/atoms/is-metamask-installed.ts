import { atom } from "recoil";

export const isMetamaskInstalledState = atom<boolean>({
  key: "isMetamaskInstalledState",
  default: false,
});
