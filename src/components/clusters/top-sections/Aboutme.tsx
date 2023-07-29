import React from "react";
import { BsPersonSquare } from "react-icons/bs";

import TopPageSection from "@/components/elements/TopSection";

export const Aboutme = () => {
  const icon = (
    <BsPersonSquare className="text-xlarge-size font-semibold text-base-color dark:text-white" />
  );
  return (
    <TopPageSection title="About Me" icon={icon}>
      <p className="leading-7">
        東京のIT企業で働いてるどこにでもいそうな開発者。
        <br />
        仕事では主にAWS触ることが多いですが、逆にプライベートではフロント開発やモバイルアプリ開発をすることが多いです。
        <br />
        「もっとアプリ、サービスを量産していきたい」という気持ちで日々奮闘中。
        <br />
        <br />
        技術スタック: Python / React / ReactNative / TypeScript / AWS / MySQL
      </p>
    </TopPageSection>
  );
};

export default Aboutme;
