import { useState, useEffect } from "react";
import SlideshowItem from "./SlideshowItem";

const NFTPage = ({ setClicked, setReady }) => {
  // const { publicKey } = useWallet()
  useEffect(() => {
    setClicked(true);
    setReady(true);
  });

  const [walletModalActive, setWalletModalActive] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletType, setWalletType] = useState(null);

  const collectionData = {
    tier3: [
      {
        name: "Scorpion",
        price: 0.01,
        quantity: 500,
        sold: 0,
        url: "/nft/0.png",
      },
      {
        name: "Sub-Zero",
        price: 0.01,
        quantity: 500,
        sold: 0,
        url: "/nft/1.png",
      },
      {
        name: "Reptile",
        price: 0.01,
        quantity: 500,
        sold: 0,
        url: "/nft/2.png",
      },
    ],
    tier2: [
      {
        name: "Noob Saibot",
        price: 0.02,
        quantity: 250,
        sold: 0,
        url: "/nft/3.png",
      },
      {
        name: "Smoke",
        price: 0.02,
        quantity: 250,
        sold: 0,
        url: "/nft/4.png",
      },
      {
        name: "Rain",
        price: 0.02,
        quantity: 250,
        sold: 0,
        url: "/nft/5.png",
      },
    ],
    tier1: [
      {
        name: "Ermac",
        price: 0.05,
        quantity: 20,
        sold: 0,
        url: "/nft/6.png",
      },
      {
        name: "Tremor",
        price: 0.07,
        quantity: 10,
        sold: 0,
        url: "/nft/7.png",
      },
      {
        name: "Chameleon",
        price: 1.0,
        quantity: 1,
        sold: 0,
        url: "/nft/8.gif",
      },
    ],
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom Wallet Found");
          const response = await solana.connect({ onlyIfTrusted: true });

          console.log(
            "connected to public key",
            window.solflare.publicKey.toString()
          );
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        console.log("Solana not found. Get a Phantom Wallet");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const connectWallet = async (walletType) => {
    console.log("wallet", walletType);
    if (walletType === "phantom") {
      const { solana } = window;
      if (solana) {
        const response = await solana.connect();
        if (response) {
          console.log(
            "connected with public key",
            response.publicKey.toString()
          );
          setWalletAddress(response.publicKey.toString());
          setWalletType(walletType);
          setWalletModalActive(false);
        } else {
          console.log("user cancelled request");
        }
      }
    }

    if (walletType === "solflare") {
      const { solflare } = window;
      if (solflare) {
        const response = await solflare.connect();
        if (response) {
          console.log(
            "connected with public key",
            solflare.publicKey.toString()
          );
          setWalletAddress(solflare.publicKey.toString());
          setWalletType(walletType);
          setWalletModalActive(false);
        } else {
          console.log("user cancelled i guess");
        }
      }
    }
  };

  const disconnectWallet = async () => {
    if (window.solflare && window.solflare.isConnected) {
      const { solflare } = window;
      if (solflare) {
        await solflare.disconnect();
        setWalletAddress(null);
      }
    } else {
      const { solana } = window;
      if (solana) {
        console.log("shit im cut already");
        await solana.disconnect();
        setWalletAddress(null);
      }
    }
  };

  const toggleWalletModal = () => {
    setWalletModalActive(!walletModalActive);
  };

  useEffect(() => {
    if (walletModalActive) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", keyHandler, false);
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", keyHandler, false);
    }
  }, [walletModalActive]);

  const keyHandler = (e) => {
    if (e.key === "Escape") {
      setWalletModalActive(false);
    }
  };

  const renderNotConnectedContainer = () => (
    <button
      className="border border-white rounded-md px-8 py-3"
      onClick={toggleWalletModal}
    >
      Connect wallet
    </button>
  );

  const renderWallerInfo = () => (
    <button
      className="border border-white rounded-md px-8 py-3"
      onClick={disconnectWallet}
    >
      <img className="h-6 w-6 inline mr-4" src={`/${walletType}.png`} alt="" />
      {`${walletAddress.substring(0, 5)}...${walletAddress.substring(
        walletAddress.length - 5
      )}`}
    </button>
  );

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };

    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      <header className="mt-16 p-6 flex justify-end font-averta bg-black">
        {walletAddress && renderWallerInfo()}
        {!walletAddress && renderNotConnectedContainer()}
      </header>
      {/* wallet header */}

      <div className="w-full font-averta">
        <section className="h-screen w-full flex flex-col items-center bg-black pt-4 px-6">
          <img className="w-44" src="/nft/hero.png" alt="a bored ninja" />

          <h1 className="font-averta-bold text-center pb-2 xs:w-10/12 lg:w-auto mx-auto main-headline leading-tight uppercase">
            <span className="text-3xl sm:text-2xl lg:text-4xl whitespace-nowrap">
              Bored Ninja
            </span>
            <br />
            <span className="text-5xl sm:text-4xl lg:text-6xl whitespace-nowrap">
              Fight Club
            </span>
          </h1>

          <p className="text-center xs:w-10/12 lg:w-auto text-lg sm:text-3xl mx-auto main-headline opacity-70 font-normal leading-snug">
            Mint the NFT, support me, Ryan. and my financial empowerment
          </p>

          <div className="flex item-center space-x-4 w-full mx-auto mt-8 justify-center">
            <a
              href="#mint"
              className="border border-white bg-white rounded-md font-bold text-sm md:text-xl text-black px-8 py-4 flex items-center justify-center w-1/2 md:w-1/3 lg:w-1/4"
            >
              Mint
            </a>
            <a
              href="#about"
              className="border border-white bg-black rounded-md font-bold text-sm md:text-xl text-white px-8 py-4 flex items-center justify-center w-1/2 md:w-1/3 lg:w-1/4"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-help-circle hidden relative md:block w-5 mr-1"
                color="#fff"
              >
                <g>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </g>
              </svg>
              What is this?
            </a>
          </div>
        </section>
        {/* hero section */}

        <section className="min-h-screen px-2 xs:px-4 pt-6 xs:pt-12 max-w-3xl mx-auto">
          <div className="mb-16">
            <h2 className="text-center pt-12">Mint ends in:</h2>
            <div className="mt-4 mx-auto justify-center items-center text-center flex">
              <div className="mr-2 xs:mr-4 flex flex-col space-y-1">
                <div className="flex space-x-0.5">
                  <div
                    className="text-center font-bold rounded-sm px-2 py-1 bg-tertiary text-xl xs:text-2xl mx-auto w-6 xs:w-9 bg-white bg-opacity-20"
                    style={{ minWidth: 26 }}
                  >
                    0
                  </div>
                  <div
                    className="text-center font-bold rounded-sm px-2 py-1 bg-tertiary text-lg xs:text-2xl mx-auto w-6 xs:w-9 bg-white bg-opacity-20"
                    style={{ minWidth: 26 }}
                  >
                    0
                  </div>
                </div>
                <span className="uppercase text-center font-bold opacity-60 text-accent-4 text-xs">
                  days
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex space-x-0.5">
                  <div
                    className="text-center font-bold rounded-sm px-2 py-1 bg-tertiary text-lg xs:text-2xl mx-auto w-6 xs:w-9 bg-white bg-opacity-20"
                    style={{ minWidth: 26 }}
                  >
                    0
                  </div>
                  <div
                    className="text-center font-bold rounded-sm px-2 py-1 bg-tertiary text-lg xs:text-2xl mx-auto w-6 xs:w-9 bg-white bg-opacity-20"
                    style={{ minWidth: 26 }}
                  >
                    0
                  </div>
                </div>
                <span className="uppercase text-center font-bold opacity-60 text-accent-4 text-xs">
                  hr
                </span>
              </div>

              <span
                className="relative font-bold"
                style={{ paddingLeft: 3, paddingRight: 2, top: -10 }}
              >
                :
              </span>

              <div className="flex flex-col space-y-1">
                <div className="flex space-x-0.5">
                  <div
                    className="text-center font-bold rounded-sm px-2 py-1 bg-tertiary text-lg xs:text-2xl mx-auto w-6 xs:w-9 bg-white bg-opacity-20"
                    style={{ minWidth: 26 }}
                  >
                    0
                  </div>
                  <div
                    className="text-center font-bold rounded-sm px-2 py-1 bg-tertiary text-lg xs:text-2xl mx-auto w-6 xs:w-9 bg-white bg-opacity-20"
                    style={{ minWidth: 26 }}
                  >
                    0
                  </div>
                </div>
                <span className="uppercase text-center font-bold opacity-60 text-accent-4 text-xs">
                  min
                </span>
              </div>

              <span
                className="relative font-bold"
                style={{ paddingLeft: 3, paddingRight: 2, top: -10 }}
              >
                :
              </span>

              <div className="flex flex-col space-y-1">
                <div className="flex space-x-0.5">
                  <div
                    className="text-center font-bold rounded-sm px-2 py-1 bg-tertiary text-lg xs:text-2xl mx-auto w-6 xs:w-9 bg-white bg-opacity-20"
                    style={{ minWidth: 26 }}
                  >
                    0
                  </div>
                  <div
                    className="text-center font-bold rounded-sm px-2 py-1 bg-tertiary text-lg xs:text-2xl mx-auto w-6 xs:w-9 bg-white bg-opacity-20"
                    style={{ minWidth: 26 }}
                  >
                    0
                  </div>
                </div>
                <span className="uppercase text-center font-bold opacity-60 text-accent-4 text-xs">
                  sec
                </span>
              </div>
            </div>
          </div>
          {/* mint timer */}

          <div className="relative flex flex-col justify-center md:flex-row gap-6 mb-16">
            <div
              id="mint"
              className="mint-anchor-target absolute left-0 -top-16 xs:-top-2"
            />
            {/* scroll anchor */}

            <div>
              <h2
                className="text-2xl font-bold mx-auto mb-4"
                style={{ maxWidth: 300 }}
              >
                OG Tier
              </h2>
              <SlideshowItem data={collectionData.tier3} />
            </div>

            <div>
              <h2
                className="text-2xl font-bold mx-auto mb-4"
                style={{ maxWidth: 300 }}
              >
                Hidden Tier
              </h2>
              <SlideshowItem data={collectionData.tier2} />
            </div>

            <div>
              <h2
                className="text-2xl font-bold mx-auto mb-4"
                style={{ maxWidth: 300 }}
              >
                Obscure Tier
              </h2>
              <SlideshowItem data={collectionData.tier1} />
            </div>
          </div>
        </section>
        {/* content section */}
      </div>
      {/* container */}

      <section className="w-screen bg-gray-800 font-averta">
        <div className="container pt-20 pb-20 px-8 xs:pb-32 max-w-3xl mx-auto relative">
          <div
            id="about"
            className="about-anchor-target absolute left-0 top-0 xs:-top-2"
          />
          {/* scroll anchor */}

          <h2 className="text-2xl mb-4">What is this all about?</h2>

          <p className="mb-4">
            BNFC is a one-of-a-kind project that pays tribute to the iconic
            Mortal Kombat game by creating a collection of abstract NFTs
            (Non-Fungible Tokens) inspired by the unique color palettes of the
            game's famous ninjas. Using the Solana blockchain and Metaplex candy
            machine, the project aims to mint and sell these abstract NFTs,
            capturing the essence of the Mortal Kombat ninjas while offering a
            fresh, artistic perspective.
          </p>

          <p className="mb-4">
            Mortal Kombat is a legendary fighting game series known for its
            diverse roster of characters, particularly the palette-swapped
            ninjas, who share similar appearances but are differentiated by
            their distinctive color schemes. This project celebrates these
            characters by creating abstract digital art pieces that showcase the
            ninjas' unique color palettes, offering fans a new way to appreciate
            and connect with their favorite characters.
          </p>

          <p className="mb-4">
            Using sophisticated digital art tools, the project creator has
            designed a series of abstract NFTs that highlight the individual
            color palettes of each Mortal Kombat ninja. These NFTs showcase an
            array of shapes, patterns, and textures, all carefully selected to
            represent the essence and spirit of each character. The result is a
            visually striking and mesmerizing collection of abstract art that
            pays homage to the legendary game.
          </p>

          <p className="mb-4">
            The Solana blockchain has been chosen for this project due to its
            high-speed transactions, low fees, and growing ecosystem of
            decentralized applications (dApps). Utilizing Metaplex, a protocol
            built on the Solana blockchain, the project creator has set up a
            candy machine for minting the NFTs, providing users with a smooth
            and efficient process for minting and purchasing their desired BNFC
            NTFs.
          </p>

          <p>
            BNFC is a groundbreaking project that combines the nostalgia of
            Mortal Kombat with the excitement of the NFT market through the
            creation of abstract art pieces inspired by the game's unique ninja
            color palettes. With its meticulously crafted designs, minting
            process, and launch, BNFC has the potential to attract a wide
            audience, including Mortal Kombat fans, NFT enthusiasts, and art
            collectors alike.
          </p>

          <div className="w-full flex justify-center">
            <img
              className="w-12 mt-16"
              src="/nft/hero.png"
              alt="a bored ninja"
            />
          </div>
        </div>
      </section>

      <footer className="bg-black px-8 xs:px-4 max-w-11/12">
        <div className="mx-auto py-20 max-w-3xl">
          <div className="relative flex flex-col sm:flex-row items-center justify-between sm:space-x-12">
            <div className="flex flex-col sm:flex-row items-center leading-none">
              <img
                className="w-6 sm:mr-4 mb-4 sm:mb-0"
                src="/rz-logo.jpg"
                alt="r z logo"
              />
              <p className="leading-none opacity-40 text-white font-averta-bold mb-4 md:mb-0">
                &copy; 2022 Ryan Zola
              </p>
            </div>
            <nav aria-label="social links navigation">
              <ul className="max-w-lg flex justify-center sm:justify-end xs:mt-0 mb-8 sm:mb-0 mx-auto space-x-4">
                <li>
                  <a
                    href="mailto:ryanzola@me.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="h-6 w-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="sr-only">Email me</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/ryanzola"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="m24 7.598c-.044-.264-.08-.47-.36-.641-11.449-6.791-11.287-7.297-12.03-6.848-8.677 5.394-11.092 6.597-11.439 7.017-.315.323-.171.818-.171 8.298-.021.851 7.743 5.462 11.519 8.404.333.237.752.199 1.003-.029 11.224-7.956 11.497-7.636 11.478-8.375 0 0-.012-7.927 0-7.826zm-1.5 6.491-3.876-2.359 3.876-2.697zm-5.277-3.212-4.473-2.722v-6.07l9.126 5.555zm-5.223 3.633-3.876-2.697 3.876-2.359 3.876 2.359zm-.75-12.426v6.074c-1.739 1.079-3.209 1.98-4.451 2.734l-4.675-3.252zm-5.857 9.658c-1.874 1.127-3.098 1.843-3.893 2.32v-5.029zm1.33.924 4.527 3.149v5.999l-9.126-6.349zm6.027 9.149v-5.999l4.527-3.149 4.599 2.799z" />
                    </svg>
                    <span className="sr-only">Check out my Codepen</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ryanzola"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="sr-only">Check out my github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ryanzola/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                    <span className="sr-only">Connect with me on LinkedIn</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
      {/* footer */}

      <div
        className={`overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 font-averta z-40 backdrop-filter backdrop-blur ${
          walletModalActive ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto relative w-screen sm:w-full h-screen sm:h-auto max-w-md max-h-screen px-8 py-16 bg-black md:border rounded-none sm:rounded-lg shadow-3xl overflow-y-auto">
          <button
            className="my-auto ml-auto close-button trans text-inverse opacity-80 hover:opacity-100 absolute right-12 top-12 md:right-6 md:top-6"
            onClick={toggleWalletModal}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x w-6 h-6"
            >
              <g>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </g>
            </svg>
          </button>

          <div className="p-8 flex flex-col justify-end">
            <h4 className="mb-4 text-2xl font-bold">Connect to a wallet</h4>
            <p className="mb-8">
              By connecting a wallet, you agree to Ryan's Terms of Service and
              acknowledge that you have read and understand the Ryan protocol
              disclaimer.
            </p>
            <ul className="space-y-2 mx-auto w-full mb-8">
              <li>
                <button
                  className="space-x-2 bg-gray-900 rounded-lg p-4 flex items-center w-full transition-colors border border-transparent hover:border-white hover:bg-gray-800"
                  onClick={() => connectWallet("phantom")}
                >
                  <img
                    className="h-6 w-6 ml-4"
                    src="/phantom.png"
                    alt="phantom wallet icon"
                  />
                  <span className="capitalize leading-none tracking-wider font-bold text-lg">
                    Phantom
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="space-x-2 bg-gray-900 rounded-lg p-4 flex items-center w-full transition-colors border border-transparent hover:border-white hover:bg-gray-800"
                  onClick={() => connectWallet("solflare")}
                >
                  <img
                    className="h-6 w-6 ml-4"
                    src="/solflare.png"
                    alt="solflare wallet icon"
                  />
                  <span className="capitalize leading-none tracking-wider font-bold text-lg">
                    Solflare
                  </span>
                </button>
              </li>
            </ul>
            <a
              className="transition hover:opacity-70 underline text-lg"
              href="https://docs.solana.com/wallet-guide"
              target="_blank"
              rel="noreferrer"
            >
              What's a wallet?
            </a>
          </div>
        </div>
      </div>
      {/* modal */}
    </>
  );
};

export default NFTPage;
