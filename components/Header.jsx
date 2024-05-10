import React from "react";
import Image from "next/image";

import headerImg from "../assets/images/header-img.png";

const Header = () => {
  return (
    <div className="HEADER w-full flex items-center justify-center">
      <Image src={headerImg} alt="rome web award logo" />
    </div>
  );
};

export default Header;
