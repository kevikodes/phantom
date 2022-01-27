import React, { useEffect } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useWeb3 } from "@3rdweb/hooks";
import "./mint.css";

const Mint = () => {
  const { address, provider } = useWeb3();
  const sdk = new ThirdwebSDK(provider);
  const tokenId = "0";
  const module = sdk.getBundleDropModule(
    "0x82BCd1781329D0A2D721B0535DA5BDF62669c0bc"
  );

  const getBalance = async () => {
    try {
      const balance = await module.balanceOf(address, tokenId);
      console.log(balance.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const getNftData = async () => {
    const nfts = await module.getAll();
    console.log(nfts);
  };

  useEffect(() => {
    return getBalance();
  }, []);

  return (
    <div className="mintFrame">
      {address && (
        <iframe
          src="https://cloudflare-ipfs.com/ipfs/bafybeib6q6q2a4ibiwfq657suynze7r4a3kyh6cuhvkga2sc4gjez2rz2y?contract=0x82BCd1781329D0A2D721B0535DA5BDF62669c0bc&chainId=4&tokenId=0"
          width="500px"
          height="500px"
          style={{ maxWidth: "70%", backgroundColor: "green" }}
          frameborder="0"
        />
      )}
    </div>
  );
};

export default Mint;
