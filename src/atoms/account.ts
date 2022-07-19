import { atom } from "recoil";

export const accountState = atom<string | undefined>({
  key: "accountState",
  default: undefined,
});

export const accountConnectionErrorState = atom<Error | undefined>({
  key: "accountConnectionErrorState",
  default: undefined,
});
