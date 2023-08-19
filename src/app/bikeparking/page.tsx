import Link from "next/link";
import React from "react";

import { Header } from "@/components/elements/Header";

export default function Home() {
  return (
    <>
      <Header
        title="バイク駐輪場Map"
        imgPath="/images/bikeparking-map.png"
        linkPath="/bikeparking"
      />
      <div>
        <ul className="text-lg text-blue-500 underline dark:text-blue-200">
          <li className="py-1">
            <Link href="/bikeparking/privacypolicy">プライバシーポリシー</Link>
          </li>
          <li className="py-1">
            <Link href="/bikeparking/termsofuse">利用規約</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
