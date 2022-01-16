import React from "react";
import "./faq.css";

const Faqs = () => {
  return (
    <div className="faqWrapper">
      <div className="darkGlassCard faqContainer">
        <div className="faqQuestion">
          What is an NFT? Is it a cryptocurrency?
        </div>
        <div className="faqAnswer">
          Non-Fungible Tokens are unique, easily verifiable digital assets that
          can represent items such as GIFs, images, videos, music albums, and
          more. Anything that exists online can be purchased as an NFT,
          theoretically. An NFT is “a type of cryptographic token,” Emerging
          Tech Brew writer Ryan Duffy explains, but NFTs are different from
          cryptocurrencies because they’re not interchangeable. Think of Pokémon
          cards: You can trade them, but a Gastly is not the same as a
          holographic Charizard. But a bitcoin is indistinguishable from another
          bitcoin.
        </div>
        <div className="faqQuestion">
          Why would I want to own an NFT? Can I make money on it?
        </div>
        <div className="faqAnswer">
          One reason to buy an NFT is for its emotional value, which isn’t so
          different from physical objects...unless you’re a total utilitarian.
          No one buys lip gloss because they need it. They buy it for the way it
          makes them feel. The same can be true for a GIF, image, video, or
          other digital asset. The other reason is because you think it’s
          valuable...and will only increase in value. And yes, you can make
          money off of an NFT by buying and reselling it for more.
        </div>
        <div className="faqQuestion">How do you buy an NFT?</div>
        <div className="faqAnswer">
          The process varies based on what platform you use. And there are a lot
          of platforms. On Top Shot for instance, you register to join a
          waitlist that can be thousands of NBA fans long. When a digital asset
          goes on sale, you’re randomly chosen to buy it. While Top Shot accepts
          USD as well as crypto, some platforms only accept cryptocurrencies,
          like OpenSea.
        </div>
        <div className="faqQuestion">
          How do you know your NFT is authentic?
        </div>
        <div className="faqAnswer">
          NFT ownership is recorded on the blockchain, and that entry acts as a
          digital pink slip. Defining the blockchain is a whole ‘nother can of
          worms that you can read about here. Where is the blockchain? It’s
          decentralized, so it exists across many people’s computers in
          encrypted bits and pieces.
        </div>
        <div className="faqQuestion">Are NFTs new? </div>
        <div className="faqAnswer">
          They’re newly popular, but not new. Andrew Steinwold traces their
          origins all the way back to blockchain-backed Colored Coins in 2012,
          but they didn’t move into the mainstream until CryptoKitties had
          everyone buying virtual cats in 2017. Recently, as Google search
          trends indicate, interest in NFTs has exploded. The creators of
          CryptoKitties started Top Shot, a platform that allows fans to buy,
          sell, and trade NBA highlights, and digital artwork is now being
          auctioned by Christie’s.
        </div>
      </div>
    </div>
  );
};

export default Faqs;
