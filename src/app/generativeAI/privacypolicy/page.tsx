import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

const privacyPolicyMdPath = path.join(
  process.cwd(),
  "src",
  "data",
  "md",
  "generativeAi",
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
      <div className="markdown">
        <ReactMarkdown>{data}</ReactMarkdown>
      </div>
    </>
  );
}
