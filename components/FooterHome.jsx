import Image from 'next/image';
import Link from 'next/link';

// import { motion } from "framer-motion";

import styles from '../styles';
// import { footerVariants } from "../utils/motion";
import { socials } from '../data/constants';

const Footer = () => (
  <footer className="px-10 pt-20 pb-10 relative bg-black">
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-2`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold text-[18px] md:text-[24px] uppercase text-white opacity-70">
          Copenhagen Touch rugby
        </h4>
      </div>
      <h4 className="text-[14px] md:text-[16px] text-white opacity-70">Sponsored by</h4>
      <div className="w-[260px] md:w-[400px]">
        <Link href="https://www.bootleggers.dk/">
          <Image
            src={'/img/bootleggers-logo.webp'}
            width="0"
            height="0"
            sizes="100vw"
            alt="Bootleggers Bar"
            className="w-full h-auto opacity-70"
            priority
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>

        <div className="flex items-center justify-between gap-4 opacity-70">
          <p className="font-normal text-xl  md:text-2xl md:text-[24px] text-white ">
            <Link href="/about">
              <span className="hover:text-green-400">Get in touch</span>
            </Link>
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link href={social.link} key={social.name}>
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  height={24}
                  width={24}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
        <p className="text-white opacity-70 pt-6 text-lg md:text-4xl text-center">
          <Link href={'https://www.facebook.com/groups/172852439436767/events'}>
            <span className="hover:text-green-400">Check play is going ahead</span>
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
