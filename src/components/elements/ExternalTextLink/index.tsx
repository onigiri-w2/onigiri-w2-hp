import React from "react";
import { BiLinkExternal } from "react-icons/bi";

type Props = {
  url: string;
  title: string;
  isBold?: boolean;
  color?: string;
  darkmodeColor?: string;
  fontSize?: string;
  withIcon?: boolean;
  withUnderline?: boolean;
};
const ExternalTextLink = ({
  url,
  title,
  isBold = false,
  color = "text-primary-700",
  darkmodeColor = "dark:text-primary-400",
  fontSize = "text-normal-size",
  withIcon = true,
  withUnderline = true,
}: Props) => {
  const boldCss = isBold ? "font-semibold" : "";
  const underlineCss = withUnderline ? "underline" : "";

  return (
    <a
      className={`flex items-center ${fontSize} ${underlineCss} ${boldCss} ${color} ${darkmodeColor}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
      {withIcon && <BiLinkExternal className="ml-1" />}
    </a>
  );
};

export default ExternalTextLink;
