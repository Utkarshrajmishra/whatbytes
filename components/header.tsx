"use server";
import { Menu } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <section className="h-16 w-full flex justify-between items-center md:pl-8 md:pr-10 px-4  bg-white border-b border-zinc-200">
      <div className="flex items-center">
        <Image
          src={"/logo.png"}
          alt="Logo"
          height={40}
          width={150}
          className="object-contain hidden lg:inline-block"
        />
        <Menu className="inline-block md:hidden"/>
      </div>
      
      <div className="flex items-center p-1 gap-2 shadow border rounded-md border-zinc-200">
        <Image 
          src={"/user.png"} 
          alt="User" 
          height={24} 
          width={24}
          className="rounded-full"
        />
        <p className="text-sm font-bold pr-1">Andrea Rollins</p>
      </div>
    </section>
  );
};

export default Header;