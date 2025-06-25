import Link from "next/link";
import React from "react";

import { Header } from "@/components/elements/Header";

export default function Home() {
  return (
    <>
      <Header
        title="やりたいことリスト Wanna"
        imgPath="/images/wanna.png"
        linkPath="/wannado"
      />
      <div>
        <ul className="text-lg text-blue-500 underline dark:text-blue-200">
          <li className="py-1">
            <Link href="/wannado/privacypolicy">プライバシーポリシー</Link>
          </li>
          <li className="py-1">
            <Link href="/wannado/termsofuse">利用規約</Link>
          </li>
          <li className="py-1">
            <Link href="https://apps.apple.com/jp/app/%E3%82%84%E3%82%8A%E3%81%9F%E3%81%84%E3%81%93%E3%81%A8%E3%83%AA%E3%82%B9%E3%83%88-wanna/id6451151247">
              App Store
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
