/** ホームページトップのセクションコンポーネント */
import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};
const TopPageSection = ({ icon, title, children }: Props) => {
  // TODO: 背景色は動的に変更できるようにした方がいいか
  return (
    <section
      className="mx-auto bg-white p-4
      text-base-color dark:bg-dark-800 dark:text-gray-200
    "
    >
      <div className="flex flex-row items-center border-b border-base-color-light pb-2">
        {/* <NextImage src={iconPath} alt="icon" width={28} height={28} /> */}
        {icon}
        <h1 className="ml-2 text-large-size font-semibold">{title}</h1>
      </div>
      <div className="mt-4 text-base-color dark:text-gray-200">{children}</div>
    </section>
  );
};

export default TopPageSection;
