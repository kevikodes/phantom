import React, { useState } from "react";
import Faq from "../components/Faq";
import "../styles/faq.css";

const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is an NFT? Is it a cryptocurrency?",
      answer: `Non-Fungible Tokens are unique, easily verifiable digital assets that
      can represent items such as GIFs, images, videos, music albums, and
      more. Anything that exists online can be purchased as an NFT,
      theoretically. An NFT is “a type of cryptographic token,” Emerging
      Tech Brew writer Ryan Duffy explains, but NFTs are different from
      cryptocurrencies because they’re not interchangeable. Think of Pokémon
      cards: You can trade them, but a Gastly is not the same as a
      holographic Charizard. But a bitcoin is indistinguishable from another
      bitcoin.`,
      id: 1,
    },
    {
      question: "Why would I want to own an NFT? Can I make money on it?",
      answer: `One reason to buy an NFT is for its emotional value, which isn’t so
      different from physical objects...unless you’re a total utilitarian.
      No one buys lip gloss because they need it. They buy it for the way it
      makes them feel. The same can be true for a GIF, image, video, or
      other digital asset. The other reason is because you think it’s
      valuable...and will only increase in value. And yes, you can make
      money off of an NFT by buying and reselling it for more.`,
      id: 2,
    },
    {
      question: "How do you buy an NFT?",
      answer: `The process varies based on what platform you use. And there are a lot
      of platforms. On Top Shot for instance, you register to join a
      waitlist that can be thousands of NBA fans long. When a digital asset
      goes on sale, you’re randomly chosen to buy it. While Top Shot accepts
      USD as well as crypto, some platforms only accept cryptocurrencies,
      like OpenSea.`,
      id: 3,
    },
    {
      question: "How do you know your NFT is authentic?",
      answer: `NFT ownership is recorded on the blockchain, and that entry acts as a
      digital pink slip. Defining the blockchain is a whole ‘nother can of
      worms that you can read about here. Where is the blockchain? It’s
      decentralized, so it exists across many people’s computers in
      encrypted bits and pieces.`,
      id: 4,
    },
    {
      question: "Are NFTs new?",
      answer: `They’re newly popular, but not new. Andrew Steinwold traces their
      origins all the way back to blockchain-backed Colored Coins in 2012,
      but they didn’t move into the mainstream until CryptoKitties had
      everyone buying virtual cats in 2017. Recently, as Google search
      trends indicate, interest in NFTs has exploded. The creators of
      CryptoKitties started Top Shot, a platform that allows fans to buy,
      sell, and trade NBA highlights, and digital artwork is now being
      auctioned by Christie’s.`,
      id: 5,
    },
    {
      question: "More Information",
      answer: `Bitcoin’s primary use is as a virtual currency and store of value.`,
      id: 6,
    },
    {
      question: "",
      answer: `Ethereum is often referred to as the second most popular cryptocurrency, after Bitcoin. `,
      id: 7,
    },

    {
      question: "",
      answer: `Blockchain, an open distributed ledger that records transactions.`,
      id: 8,
    },

    {
      question: "",
      answer: `NFT, A non-fungible token is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger. `,
      id: 9,
    },
    {
      question: "",
      answer: `OpenSea, the largest NFT marketplace.`,
      id: 10,
    },

    {
      question: "",
      answer: `Solidity is an object-oriented, high-level language for implementing smart contracts.`,
      id: 11,
    },

    {
      question: "",
      answer: ` CryptoCurrency, is a medium of exchange that is digital, encrypted and decentralized.  `,
      id: 11,
    },

    {
      question: "",
      answer: ` CryptoCurrency, No central authority manages or maintains cryptocurrency value. Value is broadly distributed among a cryptocurrency's users via the internet. `,
      id: 11,
    },

    {
      question: "",
      answer: ` Crypto, you can buy regular goods and services  `,
      id: 11,
    },

    {
      question: "",
      answer: ` Asset Class, can be a investment, like stocks or precious metals, but also can be risky. `,
      id: 11,
    },

    {
      question: "",
      answer: ` Crypto Wallet, money transfer, account, by telephone number, or QR code `,
      id: 11,
    },

    {
      question: "",
      answer: ` Common Coins, Bitcoin, Ethereum and Dogecoin. `,
      id: 11,
    },

    {
      question: "",
      answer: ` Best Crypto Exchanges, January 2022, 		Binance.US `,
      id: 11,
    },

    {
      question: "",
      answer: ` Beginner, Exchanges, 		CoinBase `,
      id: 11,
    },

    {
      question: "",
      answer: ` More, Exchanges, bitFlyer, 	Bitstamp, Bittrex, Global, Crypto.com, Gate.io, Gemini, Kraken, KuCoin `,
      id: 11,
    },

    {
      question: "",
      answer: ` Exchange transaction fees, dependent on your purchase amount with convenience fee of 0.5%. `,
      id: 11,
    },
  ]);
  return (
    <div className="faqWrapper">
      <h1 className="faqTitle">Frequently Asked Questions</h1>
      <div className="darkGlassCard faqContainer">
        {faqs.map((faq) => {
          return (
            <Faq key={faq.id} question={faq.question} answer={faq.answer} />
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
