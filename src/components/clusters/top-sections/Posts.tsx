import React from "react";

import ExternalTextLink from "@/components/elements/ExternalTextLink";
import TopPageSection from "@/components/elements/TopSection";

export const Posts = () => {
  return (
    <TopPageSection title="Posts" iconPath="/images/posts.png">
      <div className="mb-6">
        <Post
          title="例外処理 俺の指針"
          url="https://zenn.dev/articles/faf23d5236ee71/edit"
          date="2022-07-16"
          description="「例外処理むっず...何を指針にして実装すりゃええねん...」ってなったので、調査して思考して記事書きました。"
        />
      </div>
      <div className="mb-6">
        <Post
          title="Dockerロギング 入門"
          url="https://zenn.dev/onigiri_w2/articles/e40c5873f7f453"
          date="2022-05-30"
          description="今までDockerのロギングはいつも適当に設定していた。だが、ロギングを状況に合わせて適切に設定しないと、性能・信頼性に影響するらしいので、しっかりと理解を深めておこうと思う。"
        />
      </div>
      <div className="mb-6">
        <Post
          title="pytest 最低限入門"
          url="https://zenn.dev/onigiri_w2/articles/5e6cf4d3ba9ed5"
          date="2022-05-30"
          description="pytestの使い方を毎回忘れてしまうので、よく使う関数や機能・ライブラリをまとめておく。今後もまた忘れた時にこのページを見返すことにする。"
        />
      </div>
      <ExternalTextLink
        url="https://zenn.dev/onigiri_w2"
        title="&gt;&gt; もっと見る"
        fontSize="text-small-size"
        withIcon={false}
        withUnderline={false}
      />
    </TopPageSection>
    //   <Text mt={6} fontSize="sm" color="cyan.700">
    //     <Link href="https://zenn.dev/onigiri_w2" isExternal>
    //       &gt;&gt; もっと見る
    //     </Link>
    //   </Text>
    // </Box>
  );
};

type PostProps = {
  title: string;
  url: string;
  date: string;
  description: string;
};
const Post = ({ title, url, date, description }: PostProps) => {
  return (
    <div>
      <ExternalTextLink url={url} title={title} isBold />
      <p className="mb-1 text-small-size text-base-color-very-light">{date}</p>
      <p className="text-small-size text-base-color">{description}</p>
    </div>
  );
};
