import React from "react";

import Aboutme from "@/components/clusters/top-sections/Aboutme";
import { Posts } from "@/components/clusters/top-sections/Posts";
import PrivateWorks from "@/components/clusters/top-sections/PrivatWorks";

export default function Home() {
  return (
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
  );
}
