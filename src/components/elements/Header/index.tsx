import NextImage from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="mb-8 flex flex-col items-center py-6">
      <Link href="/" className="mb-3 flex flex-row items-center">
        <NextImage
          src="/images/onigiri.png"
          alt="onigiri"
          width={36}
          height={36}
        />
        <span className="ml-2 text-2xlarge-size font-semibold text-primary-800">
          onigiri.w2
        </span>
      </Link>
      <div className="flex flex-row items-center space-x-4">
        <a
          href="https://twitter.com/W2Onigiri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NextImage
            src="/images/twitter.png"
            alt="twitter"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://github.com/onigiri-w2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NextImage
            src="/images/github.png"
            alt="github"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://scrapbox.io/onigiri-it-tips/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NextImage
            src="/images/scrapbox.png"
            alt="scrapbox"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
    // <Box alignItems="center" justifyContent="center" py={4} px={[2,2,0]}>
    //   <Center>
    //     <Link href="/" style={styles.link}>
    //       <HStack height="100%">
    //         <StaticImage src="../../images/onigiri.png" alt="onigiri" width={36} />
    //         <Heading color={"cyan.800"} fontSize={32}>onigiri.w2</Heading>
    //       </HStack>
    //     </Link>
    //   </Center>
    //   <Center mt={4}>
    //     <Box mx="2"><LinkIcon type="twitter" url="https://twitter.com/W2Onigiri" /></Box>
    //     <Box mx="2"><LinkIcon type="github" url="https://github.com/onigiri-w2" /></Box>
    //     <Box mx="2"><LinkImage type="scrapbox" url="https://scrapbox.io/onigiri-it-tips/" /></Box>
    //   </Center>
    // </Box>
  );
};

const styles = {
  link: {
    textDecoration: "none",
  },
};
