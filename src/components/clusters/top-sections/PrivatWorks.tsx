import NextImage from "next/image";
import React from "react";

import TopPageSection from "@/components/elements/TopSection";

const PrivateWorks = () => {
  return (
    <TopPageSection title="Private Work" iconPath="/images/home.png">
      <div className="mb-4">
        <Work
          title="バイク駐車場Map"
          description="バイク駐車場の位置を地図で教えるモバイルアプリ。\nReactNative、python、AWS、mongodbなどを利用してる"
          iconPath="/images/bikeparking-map.png"
        />
      </div>
      <Work
        title="Wanna やりたいことリスト"
        description="やりたいことを1つ1つ自分のペースで実現していくためのアプリ。\nReactNativeのみで作ってる。"
        iconPath="/images/wanna.png"
      />
    </TopPageSection>
  );
};

type WorkProps = {
  title: string;
  description: string;
  iconPath: string;
  url?: string;
};
const Work = ({ title, description, iconPath, url = "#" }: WorkProps) => {
  const formattedDescription = description.split("\\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

  return (
    <a href={url}>
      <div className="flex flex-row items-start">
        <NextImage src={iconPath} alt="icon" width={80} height={80} />
        <div className="ml-2">
          <h1 className="text-normal-size font-semibold text-primary-700">
            {title}
          </h1>
          <p className="mt-2 text-small-size text-base-color">
            {formattedDescription}
          </p>
        </div>
      </div>
    </a>
  );
};

export default PrivateWorks;