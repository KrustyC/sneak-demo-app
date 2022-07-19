export function ProjectDescription() {
  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          What's this all about?
        </h1>
        <div className="w-full mb-16">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row px-24">
          <p className="text-gray-600 mb-8 text-2xl">
            hi there, this is just a demo site{" "}
            <span className="text-3xl"> 🥲</span>
            <br />
            <br />
            <br />
            This is a demo and a template repo to be used for future React apps
            that may need to interact with a Smart Contract on the Ethereum
            Blockhain. The collection you are looking at is fake (as you can see
            from the image), and this only work with the goerli testnet. In
            order to test this out, please make sure you have a Metamask wallet
            and that it is connected to the Goerli testnet. If you need some
            "credit", you can use{" "}
            <a href="" target="_blank">
              this faucet
            </a>{" "}
            to send yourself some GoerliETH to test this out.
          </p>
        </div>
      </div>
    </section>
  );
}
