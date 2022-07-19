import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { accountState, accountConnectionErrorState } from "@/atoms/account";

export const useConnectWallet = () => {
  const setAccount = useSetRecoilState(accountState);
  const setAccountConnectionErrorState = useSetRecoilState(
    accountConnectionErrorState
  );

  useEffect(() => {
    // storing input name
    const acc = localStorage.getItem("account");
    if (acc) setAccount(acc);
  }, []);

  const onConnectWallet = async () => {
    try {
      /**
       * Here we make the assumption that this function can only be called if metamask is installed
       * Otherwise the button that call this should be disabled
       */
      const accounts = await window.ethereum!.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length < 1) {
        throw new Error("No authorized account found");
      }

      const account = accounts[0];
      setAccount(account);
      localStorage.setItem("account", account);
    } catch (err) {
      setAccountConnectionErrorState(err as Error);
    }
  };

  return onConnectWallet;
};
