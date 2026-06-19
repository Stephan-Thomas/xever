import React from "react";
import NavLink from "./NavLink";

type LinkType = {
  title: string;
  path: string;
};

type Props = {
  links: LinkType[];
};

const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center border-t border-[#33353F] md:hidden">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
