"use server"
const Header = () => {
  return (
    <section className="h-16 w-full justify-between items-center px-6 flex bg-white border-b border-zinc-200">
      <p>WhatBytes</p>
      <div className="p-1 gap-1 shadow items-center flex border-1 rounded border-zinc-200 w-fit h-fit">
        <div className="h-6 w-6 bg-green-800 rounded-full"></div>
        <p className="text-sm  font-bold">Utkarsh Raj Mishra</p>
      </div>
    </section>
  );
};

export default Header;
