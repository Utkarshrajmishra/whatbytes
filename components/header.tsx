"use server"

import Image from "next/image";

const Header = () => {
  return (
    <section className="h-16 w-full justify-between items-center px-6 flex bg-white border-b border-zinc-200">
      <p>WhatBytes</p>
      <div className="p-1 gap-1 shadow items-center flex border-1 rounded border-zinc-200 w-fit h-fit">
        <Image src={"/user.png"} alt="User" height={24} width={24} />
        <p className="text-sm  font-bold">Andrea Rollins</p>
      </div>
    </section>
  );
};

export default Header;
