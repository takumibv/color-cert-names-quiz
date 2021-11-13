import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
}

const Seo: React.FC<Props> = ({
  title,
  description,
  image,
}: Props) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;