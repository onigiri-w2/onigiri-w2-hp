import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

const privacyPolicyMdPath = path.join(
  process.cwd(),
  "src",
  "data",
  "md",
  "bikeparking",
  "privacy-policy.md"
);

async function getData() {
  const fileContents = fs.readFileSync(privacyPolicyMdPath, "utf8");
  return fileContents;
}
export default async function Home() {
  const data = await getData();
  return (
    <>
      {/* <Header
        title="バイク駐輪場Map"
        imgPath="/images/bikeparking-map.png"
        linkPath="/bikeparking"
      /> */}
      <div className="markdown">
        <ReactMarkdown>{data}</ReactMarkdown>
      </div>
    </>
  );
}
