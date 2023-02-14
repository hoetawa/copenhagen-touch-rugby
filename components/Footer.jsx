import Image from "next/image";

// import { motion } from "framer-motion";

import styles from "../styles";
// import { footerVariants } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => (
  <footer className={`${styles.paddings} relative bg-black`}>
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[32px] text-[18px] uppercase text-white">
          Copenhagen Touch
        </h4>
      </div>
      <h4 className="text-[18px] text-white">Sponsored by</h4>
      <Image
        src={"/img/bootleggers-logo.webp"}
        width={400}
        height={400}
        alt="Bootleggers Bar"
        className=""
        priority
      />
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>
        <div className="flex items-center justify-between gap-4">
          <p className="font-normal text-[18px] md:text-[24px] text-white opacity-70">
            Get in touch
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;