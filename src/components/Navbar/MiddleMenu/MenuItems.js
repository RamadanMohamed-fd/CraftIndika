import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { Home,Arts,Handicrafts,Handlooms,Trending,Resource } from "./MenuData";
const sub=[Home,Arts,Handicrafts,Handlooms,Trending,Resource]
const MenuItems = ({ menuItemsData,index }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="relative  cursor-pointer py-3 " onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className="flex items-center justify-center pr-6 ">
        <p className="uppercase pr-2 ">{menuItemsData}</p>
        <MdOutlineKeyboardArrowDown />
      </div>
      <ul className={`z-[201] absolute  bg-[#fff] p-4 w-[200px] rounded-md mt-2 ml-0 ${open ? "block":"hidden"} p-4 text-[14px] duration-1000 ` } >
        {
         sub[index].map((data, i) => (
            <li key={i} className="p-2 underline hover:no-underline duration-200 hover:text-[var(--color-default)]">
              <a href={data.url}>{data.title}</a></li>
          ))
        }
      </ul>
    </li>
  );
};

export default MenuItems;