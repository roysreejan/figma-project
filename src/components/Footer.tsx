import { Heebo } from "next/font/google";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const heebo = Heebo({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="footerBackground space-y-9 flex flex-col items-center justify-center h-[243px]">
      <div className="flex gap-x-12 myBlack">
        <Link href={""}><FaFacebookSquare className="w-[30px] h-[30px]" /></Link>
        <Link href={""}><FaInstagram className="w-[30px] h-[30px]" /></Link>
        <Link href={""}><FaTwitter className="w-[30px] h-[30px]" /></Link>
        <Link href={""}><FaLinkedin className="w-[30px] h-[30px]" /></Link>
      </div>
      <p className={`${heebo.className} text-center font-medium text-[22px]`}>Copyright ©2025 All rights reserved </p>
    </div>
  );
};

export default Footer;
