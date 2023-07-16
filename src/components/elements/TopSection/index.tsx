/** ホームページトップのセクションコンポーネント */
import NextImage from "next/image";
import React from "react";

type Props = {
  title: string;
  iconPath: string;
  children: React.ReactNode;
};
const TopPageSection = ({ iconPath, title, children }: Props) => {
  // TODO: 背景色は動的に変更できるようにした方がいいか
  return (
    <section className="mx-auto bg-white p-4">
      <div className="flex flex-row items-center border-b border-base-color-light pb-2">
        <NextImage src={iconPath} alt="icon" width={32} height={32} />
        <h1 className="ml-2 text-large-size font-semibold text-gray-600">
          {title}
        </h1>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
};

export default TopPageSection;
