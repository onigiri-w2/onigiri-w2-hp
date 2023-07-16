import React from "react";

import TopPageSection from "@/components/elements/TopSection";

export const Aboutme = () => {
  return (
    <TopPageSection title="About Me" iconPath="/images/me.png">
      <p className="leading-7 text-base-color">
        東京のIT企業で働いてるどこにでもいそうな開発者。
        <br />
        仕事では主にAWS触ることが多いですが、逆にプライベートではフロント開発やモバイルアプリ開発をすることが多い。
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
