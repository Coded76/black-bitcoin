import { motion } from "framer-motion";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="bg-[#1C1C1C] font-custom overflow-hidden  text-white font-sans">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 container rounded-full shadow-md">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/logo.svg"
              alt="Blackbitcoin Logo"
              width={150}
              height={150}
              className="w-[316px] h-[45.6px]"
            />
          </div>
          <div className="flex bg-[#444444] px-4 py-2 rounded-full space-x-4 items-center">
            <button className="text-[#E8E8E8] px-4 py-2 bg-[#141414] rounded-full">
              Home
            </button>
            <button className="text-[#E8E8E8] px-4 py-2">WhitePaper</button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center text-[20px] font-[400] text-[#E8E8E8] rounded-full">
              <span>Join</span>
            </button>
            <FaTelegramPlane className="text-[#E8E8E8] w-5 h-5" />
            <BsTwitterX className="text-[#E8E8E8] w-5 h-5" />
          </div>
        </nav>

        {/* Home Section */}
        <section className="relative container flex bg-[#141414] rounded-[48px] flex-col items-center justify-center h-screen text-center">
          <div className="absolute inset-0 bg-stars-pattern bg-cover bg-center"></div>
          <div className="mb-6">
            <Image
              src="/assets/hero.svg"
              alt="Bitcoin Logo"
              width={150}
              height={150}
              className="w-[362px] h-[217px]"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Made For all <br /> Bitcoin Lovers
          </h1>
          <button className="mt-8 w-[400px] h-[80px] bg-[#FFFBCC] text-black font-[400] text-[31.42px] rounded-full shadow-md">
            Buy #Blackbitcoin
          </button>
        </section>

        <section className="relative bg-[#FFFBCC] text-black py-20 px-8 mx-auto w-screen my-10">
          <div className="absolute inset-0 bg-network-pattern bg-cover bg-center"></div>
          <div className="grid grid-cols-3 text-center gap-4">
            <div>
              <h2 className="text-[52px] font-[400]">21M</h2>
              <p className="text-[28px] font-[400]">Total Token Supply</p>
            </div>
            <div>
              <h2 className="text-[52px] font-[400]">5/5</h2>
              <p className="text-[28px] font-[400]">Token Tax</p>
            </div>
            <div>
              <h2 className="text-[52px] font-[400]">$0.0001</h2>
              <p className="text-[28px] font-[400]">BlackBitcoin Price</p>
            </div>
          </div>
        </section>

        <section className="relative bg-[#1C1C1C] py-16 px-8 text-center text-white">
          <h2 className="text-[52px] font-[400] mb-10">Our Partners</h2>
          <div className="flex justify-center items-center space-x-10">
            <Image
              src="/assets/dexscreener.svg"
              alt="Dexscreener"
              width={150}
              height={50}
              className="w-auto h-auto"
            />
            <Image
              src="/assets/binance.svg"
              alt="Binance Labs"
              width={150}
              height={50}
              className="w-auto h-auto"
            />
            <Image
              src="/assets/mtcapital.svg"
              alt="MT Capital"
              width={150}
              height={50}
              className="w-auto h-auto"
            />
            <Image
              src="/assets/mirana.svg"
              alt="Mirana"
              width={150}
              height={50}
              className="w-auto h-auto"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="relative bg-[#1C1C1C] py-16 px-8 text-center text-white">
          <h2 className="text-[52px] font-[400] mb-10">About BlackBitcoin</h2>
          <p className="text-[24px] leading-[1.8] max-w-5xl mx-auto mb-10">
            BlackBitcoin is the bold cousin of the original Bitcoin, built on
            the same decentralized spirit but with a mission to redefine the
            future of finance. It’s the coin for the dreamers, the risk-takers,
            and those who dare to challenge the status quo. In a sea of crypto
            projects, Black Bitcoin isn’t here to follow the herd—it’s here to
            lead the charge into uncharted territory.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-6 py-3 bg-[#FFFDD0] text-[#1C1C1C] font-medium rounded-full shadow-md">
              View on Dexscreener
            </button>
            <button className="px-6 py-3 bg-[#FFFDD0] text-[#1C1C1C] font-medium rounded-full shadow-md">
              Join our Community
            </button>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="relative container bg-[#1C1C1C] py-16 px-8 text-center text-white">
          <h2 className="text-[40px] font-bold mb-10">
            BlackBitcoin Tokenomics
          </h2>
          <div className="grid grid-cols-2 mt-20 gap-10">
            <div className="hover:scale-105 transform transition duration-500 ease-in-out">
              <Image
                src="/assets/frame1.svg"
                alt="Liquidity"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
            </div>
            <div className="hover:scale-105 transform transition duration-500 ease-in-out">
              <Image
                src="/assets/frame2.svg"
                alt="Utility"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
            </div>
            <div className="hover:scale-105 transform transition duration-500 ease-in-out">
              <Image
                src="/assets/frame3.svg"
                alt="Community"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
            </div>
            <div className="hover:scale-105 transform transition duration-500 ease-in-out">
              <Image
                src="/assets/frame4.svg"
                alt="Governance"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="min-h-screen text-white flex flex-col items-center py-12 px-4">
            <h1 className="text-[52px] font-bold mb-12">
              How To Buy Blackbitcoin
            </h1>

            <div className="space-y-8 w-full max-w-4xl">
              {/* Step 1 */}
              <div className="bg-[#444444] relative rounded-lg h-[40vh] p-10 flex items-center justify-between shadow-lg">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col gap-5">
                    <span className="w-8 h-8 flex items-center justify-center text-black bg-[#767676] rounded-full font-bold">
                      1
                    </span>
                    <span className="text-lg md:text-xl font-medium">
                      Click to Copy Contract Address
                    </span>
                  </div>
                  <button
                    className="bg-[#FFFDD0] text-black px-6 py-2 rounded-[48px] transition"
                    // onClick={() => navigator.clipboard.writeText('0x5767DHJW01I3KHUZFJ')}
                  >
                    0x5767DHJW01I3KHUZFJ
                  </button>
                </div>
                <div className="absolute bottom-0 right-20">
                  <img
                    src="/assets/how-to-buy.svg"
                    alt="Swap Icon"
                    className="h-[250px]"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#444444] relative rounded-lg h-[40vh] p-10 flex items-center justify-between shadow-lg">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col gap-5">
                    <span className="w-8 h-8 flex items-center justify-center text-black bg-[#767676] rounded-full font-bold">
                      2
                    </span>
                    <span className="text-lg md:text-xl font-medium">
                      Open Solana Wallet
                    </span>
                  </div>
                  <button className="bg-[#FFFDD0] text-black px-6 py-2 rounded-[48px] transition">
                    Open Phantom
                  </button>
                </div>
                <div className="absolute bottom-0 right-20">
                  <img
                    src="/assets/how-to-buy.svg"
                    alt="Swap Icon"
                    className="h-[250px]"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#444444] relative rounded-lg h-[40vh] p-10 flex items-center justify-between shadow-lg">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col gap-5">
                    <span className="w-8 h-8 flex items-center justify-center text-black bg-[#767676] rounded-full font-bold">
                      3
                    </span>
                    <span className="text-[30px] font-medium">
                      Swap to Blackbitcoin
                    </span>
                  </div>
                  <button className="bg-[#FFFDD0] text-black px-6 py-2 rounded-[48px] transition">
                    Open Phantom
                  </button>
                </div>
                <div className="absolute bottom-0 right-20">
                  <img
                    src="/assets/how-to-buy.svg"
                    alt="Swap Icon"
                    className="h-[250px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          {/* Community Section */}
          <div className="mt-16 bg-black rounded-[40px] py-20 px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Join Our Global Community
            </h2>
            <div className="flex justify-center space-x-6">
              <button className="bg-[#FFFDD0] text-black w-[269px] h-[50px] rounded-[48px] transition">
                Twitter
              </button>
              <button className="bg-[#FFFDD0] text-black w-[269px] h-[50px] rounded-[48px] transition">
                Telegram
              </button>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center text-[#D5D5D5] text-[20px]">
            &copy; Copyright 2025 - BlackBitcoin. All rights reserved.
          </footer>
        </section>
      </div>
    </>
  );
};

export default Home;
