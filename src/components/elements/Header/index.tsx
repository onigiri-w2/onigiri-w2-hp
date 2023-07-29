import NextImage from "next/image";
import Link from "next/link";
import React from "react";

import { ThemeSwitcher } from "../ThemeSwitcher";

export const Header = () => {
  return (
    <div className="flex flex-row items-center px-2 py-8">
      <Link href="/" className="mr-auto flex flex-row items-center">
        <div className="mr-2 rounded-full dark:bg-primary-300">
          <NextImage
            src="/images/me.png"
            alt="onigiri"
            width={36}
            height={36}
            priority
          />
        </div>
        <span className="text-2xlarge-size font-semibold text-primary-800 dark:text-primary-400">
          onigiri.w2
        </span>
      </Link>
      {/* <a
        href="https://twitter.com/W2Onigiri"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-6"
      >
        <NextImage
          src="/images/twitter.png"
          alt="twitter"
          width={28}
          height={28}
        />
      </a>
      <a
        href="https://github.com/onigiri-w2"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-6"
      >
        <NextImage
          src="/images/github.png"
          alt="github"
          width={28}
          height={28}
        />
      </a>
      <a
        href="https://scrapbox.io/onigiri-it-tips/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-6"
      >
        <NextImage
          src="/images/scrapbox.png"
          alt="scrapbox"
          width={32}
          height={32}
        />
      </a> */}
      <ThemeSwitcher />
    </div>
  );
};

const styles = {
  link: {
    textDecoration: "none",
  },
};
