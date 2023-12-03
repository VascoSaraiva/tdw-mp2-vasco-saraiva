"use client";

import { Menu } from "@headlessui/react";
import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useSession } from "next-auth/react";
import InfoIcon from '@mui/icons-material/Info';

const MenuItem = () => {
  const { data: session } = useSession();

  return (
    <Menu>
      <Menu.Button className="focus:outline-none flex items-center">
        <MenuIcon />
      </Menu.Button>

      <Menu.Items className="modal">

        <h1 className="logo">WeTravel.</h1>


        <Menu.Item>
          <Link href={"/"} className="flex items-center gap-2">
            <HomeRoundedIcon className="text-indigo-500" />
            Home
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link
            href={session ? "/create" : "/auth"}
            className="flex items-center gap-2"
          >
            <AutoAwesomeIcon className="text-indigo-500" />
            Create new tour
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link href={"/aboutus"} className="flex items-center gap-2">
            <InfoIcon className="text-indigo-500" />
            About us
          </Link>
        </Menu.Item>

        {!session && (
          <Menu.Item>
              <Link href={"/auth"} className="normalButton">
                Login or Register
              </Link>
          </Menu.Item>
        )}
      </Menu.Items>
    </Menu>
  );
};

export default MenuItem;
