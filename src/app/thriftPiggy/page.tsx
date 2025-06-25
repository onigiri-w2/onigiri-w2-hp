import Link from "next/link";
import React from "react";

import { Header } from "@/components/elements/Header";

export default function Home() {
  return (
    <>
      <Header
        title="せつやく家計簿"
        imgPath="/images/thriftPiggy.png"
        linkPath="/thriftPiggy"
      />
      <div>
        <ul className="text-lg text-blue-500 underline dark:text-blue-200">
          <li className="py-1">
            <Link href="/thriftPiggy/privacypolicy">プライバシーポリシー</Link>
          </li>
          <li className="py-1">
            <Link href="/thriftPiggy/termsofuse">利用規約</Link>
          </li>
          <li className="py-1">
            <Link href="https://apps.apple.com/jp/app/%E3%81%9B%E3%81%A4%E3%82%84%E3%81%8F%E5%AE%B6%E8%A8%88%E7%B0%BF-%E4%BA%88%E7%AE%97%E3%81%A7%E6%94%AF%E5%87%BA%E7%AE%A1%E7%90%86/id6478633627">
              App Store
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
