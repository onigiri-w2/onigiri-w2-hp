import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import { LiaHomeSolid } from "react-icons/lia";

import TopPageSection from "@/components/elements/TopSection";

const PrivateWorks = () => {
  // TODO: これは流石にリファクタリグしたい。普通にTopPageSectionにclassNameの内容を集約したい
  const icon = (
    <LiaHomeSolid className="text-xlarge-size font-semibold text-base-color dark:text-white" />
  );

  return (
    <TopPageSection title="Private Work" icon={icon}>
      <div className="mb-4">
        <Work
          title="せつやく家計簿"
          description="「絶対に節約したい」という思いで作ったアプリ。予算を元に日々の支出を管理する。\nReactNative。"
          iconPath="/images/thriftPiggy.png"
          url="/thriftPiggy"
        />
      </div>
      <div className="mb-4">
        <Work
          title="Wanna やりたいことリスト"
          description="やりたいことを1つ1つ自分のペースで実現していくためのアプリ。\nReactNativeのみで作ってる。"
          iconPath="/images/wanna.png"
          url="/wannado"
        />
      </div>
      <Work
        title="価格比較メモ"
        description="スーパー間の価格を比較したいっていう要望があるような気がしたので、一旦サクッと作成"
        iconPath="/images/pricememo.png"
        url="/pricememo"
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
    <Link href={url}>
      <div className="flex flex-row items-start">
        <NextImage src={iconPath} alt="icon" width={80} height={80} priority />
        <div className="ml-2">
          <h1 className="text-normal-size font-semibold text-primary-700 dark:text-primary-400">
            {title}
          </h1>
          <p className="mt-2 text-small-size">{formattedDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default PrivateWorks;
