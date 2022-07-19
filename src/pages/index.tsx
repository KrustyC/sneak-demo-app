import type { NextPage } from "next";
import { useEffect } from "react";

import { isMetamaskInstalledState } from "@/atoms/is-metamask-installed";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FirstWave } from "@/components/FirstWave";
import { ProjectDescription } from "@/components/ProjectDescription";
import { CollectionPreview } from "@/components/CollectionPreview";
import { SecondWave } from "@/components/SecondWave";
import { MintCTA } from "@/components/MintCTA";
import { Footer } from "@/components/Footer";

import { useSetRecoilState } from "recoil";

const Home: NextPage = () => {
  const setIsMetamaskInstalled = useSetRecoilState(isMetamaskInstalledState);

  useEffect(() => {
    setIsMetamaskInstalled(!!window.ethereum);
  }, []);

  return (
    <div className="leading-normal tracking-normal text-white gradient">
      <Navbar />
      <Hero />
      <FirstWave />
      <ProjectDescription />
      <CollectionPreview />
      <SecondWave />
      <MintCTA />
      <Footer />
    </div>
  );
};

export default Home;
