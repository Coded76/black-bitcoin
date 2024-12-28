// pages/index.js
"use client";

import { useState, useEffect } from "react";
import { FaBitcoin, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-white text-3xl animate-pulse">
          <Image
            src={"/assets/loading_logo.svg"}
            height={200}
            width={200}
            alt={"Loading Image"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

const Navbar = () => (
  <nav className="flex container justify-between items-center p-4 text-white shadow-md">
    <div className="flex items-center space-x-2">
      <Image
        src={"/assets/logo.svg"}
        height={200}
        width={200}
        alt={"Logo Image"}
      />
    </div>
    <div className="flex bg-[#444444] rounded-full p-1">
      <button className="cursor-pointer px-4 py-2 rounded-full bg-[#141414] text-white">
        Home
      </button>
      <button className="cursor-pointer px-4 py-2 rounded-full text-gray-300">
        WhitePaper
      </button>
    </div>
    <button className="flex items-center gap-4 px-4 py-2 rounded-full ">
      <span>Join</span>
      <Link href={"#"}>
        <FaXTwitter />
      </Link>
      <Link href={"#"}>
        <FaPaperPlane />
      </Link>
    </button>
  </nav>
);

const Hero = () => (
  <section className="flex container rounded-3xl flex-col items-center justify-center text-center min-h-screen bg-[#141414]  text-white">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-6xl mb-4"
    >
      <Image
        src={"/assets/hero.svg"}
        height={200}
        width={200}
        alt={"Hero Image"}
      />
    </motion.div>
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-4xl font-bold mb-4"
    >
      Made For all Bitcoin Lovers
    </motion.h1>
    <motion.button
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="mt-4 px-6 py-3 bg-[#FFFDD0] text-black font-semibold rounded-full hover:bg-[#FFFDD5]"
    >
      Buy $blackbitcoin
    </motion.button>
  </section>
);
