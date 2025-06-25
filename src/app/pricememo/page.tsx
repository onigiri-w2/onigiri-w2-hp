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
          <li className="py-1">
            <Link href="https://apps.apple.com/jp/app/%E4%BE%A1%E6%A0%BC%E6%AF%94%E8%BC%83%E3%83%A1%E3%83%A2/id6498628328">
              App Store
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
