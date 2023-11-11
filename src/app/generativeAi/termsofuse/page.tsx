import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

const termsOfUseMdPath = path.join(
  process.cwd(),
  "src",
  "data",
  "md",
  "generativeAi",
  "terms-of-use.md"
);

async function getData() {
  const fileContents = fs.readFileSync(termsOfUseMdPath, "utf8");
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
