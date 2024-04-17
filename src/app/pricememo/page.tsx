import Link from "next/link";
import React from "react";

import { Header } from "@/components/elements/Header";

export default function Home() {
  return (
    <>
      <Header
        title="価格比較メモ"
        imgPath="/images/pricememo.png"
        linkPath="/pricememo"
      />
      <div>
        <ul className="text-lg text-blue-500 underline dark:text-blue-200">
          <li className="py-1">
            <Link href="/pricememo/privacypolicy">プライバシーポリシー</Link>
          </li>
          <li className="py-1">
            <Link href="/pricememo/termsofuse">利用規約</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
