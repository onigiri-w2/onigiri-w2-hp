import Link from "next/link";
import React from "react";

import { Header } from "@/components/elements/Header";

export default function Home() {
  return (
    <>
      <Header
        title="ふつうの画像生成AI"
        imgPath="/images/generativeAi.png"
        linkPath="/generativeAi"
      />
      <div>
        <ul className="text-lg text-blue-500 underline dark:text-blue-200">
          <li className="py-1">
            <Link href="/generativeAi/privacypolicy">プライバシーポリシー</Link>
          </li>
          <li className="py-1">
            <Link href="/generativeAi/termsofuse">利用規約</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
