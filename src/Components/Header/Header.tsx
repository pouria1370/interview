import React from "react";
import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";

const Header = async () => {
  const client = createClient();
  const setting = await client.getSingle("setting");
  return (
    <header>
      <nav>
        <ul>
          <Link href={"/"}>
            <li>{setting.data.name}</li>
          </Link>
          <div>
            {setting.data.navitem.map((item, index) => (
              <li key={index}>
                <PrismicLink field={item.navlink}>{item.navtext}</PrismicLink>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
