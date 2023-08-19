import React from "react";

import Aboutme from "@/components/clusters/top-sections/Aboutme";
import { Posts } from "@/components/clusters/top-sections/Posts";
import PrivateWorks from "@/components/clusters/top-sections/PrivatWorks";
import { Header } from "@/components/elements/Header";

export default function Home() {
  return (
    <>
      <Header title="onigiri.w2" imgPath="/images/me.png" linkPath="/" />
      <div>
        <div className="mb-8">
          <Aboutme />
        </div>
        <div className="mb-8">
          <Posts />
        </div>
        <div className="mb-8">
          <PrivateWorks />
        </div>
      </div>
    </>
  );
}
