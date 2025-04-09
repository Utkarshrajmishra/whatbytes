"use server";
import { MdOutlineBarChart } from "react-icons/md";
import { TfiMedallAlt } from "react-icons/tfi";
import { IoDocumentOutline } from "react-icons/io5";
const NavLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdOutlineBarChart className="size-5 text-black" />,
    active: false,
  },
  {
    id: 2,
    title: "Skill Test",
    icon: <TfiMedallAlt className="size-5 text-blue-700" />,
    active: true,
  },
  {
    id: 3,
    title: "Internship",
    icon: <IoDocumentOutline className="size-5 text-black" />,
    active: false,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-[260px] hidden md:inline-block border-r h-[calc(100vh-16px)]">
      <nav className="flex flex-col gap-2 mt-8">
        {NavLinks?.map((link) => (
          <li
            className={`text-sm w-[95%] rounded-r-3xl  flex gap-4 py-3 pl-8  font-bold ${
              link.active ? "bg-[#f4f6f8] text-blue-700" : "text-zinc-500"
            }`}
            key={link.id}
          >
            {link.icon}
            <p>{link.title}</p>
          </li>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
