import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-400 py-6">
      <div className="container mx-auto px-4">
        <p className="text-center text-white">

          <Link href="https://github.com/takumibv/color-cert-names-quiz">
            <a target="_blank" className="hover:opacity-80">Github</a>
          </Link>
          ・
          <Link href="https://takumibv.github.io/portfolio/">
            <a target="_blank" className="hover:opacity-80">About me</a>
          </Link>
        </p>
        <p className="text-center text-gray-200 text-sm mt-2">takumibv, All Right Reserved.</p>
      </div>
    </div>
  )
};

export default Footer;
