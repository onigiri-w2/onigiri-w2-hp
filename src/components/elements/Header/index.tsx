import NextImage from "next/image";
import Link from "next/link";
import React from "react";

import { ThemeSwitcher } from "../ThemeSwitcher";

type Props = {
  title: string;
  imgPath: string;
  linkPath?: string;
};
export const Header = ({
  title = "onigiri.w2",
  imgPath = "/images/me.png",
  linkPath = "/",
}: Props) => {
  return (
    <div className="flex flex-row items-center px-2 py-8">
      <Link href={linkPath} className="mr-auto flex flex-row items-center">
        <div className="mr-2 rounded-full dark:bg-primary-300">
          <NextImage
            src={imgPath}
            alt="headerLogo"
            width={36}
            height={36}
            priority
          />
        </div>
        <span className="text-2xlarge-size font-semibold text-primary-800 dark:text-primary-400">
          {title}
        </span>
      </Link>
      <ThemeSwitcher />
    </div>
  );
};

const styles = {
  link: {
    textDecoration: "none",
  },
};
