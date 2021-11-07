import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { AppProps } from 'next/app';

export default function MouseAnimation(props: AppProps) {
  const imgRef = useRef([]);
  useEffect(() => {
    console.log("component did mount");
  }, []);

  return <div>
    <Head>
      <title>クイズ</title>
    </Head>

    <div className="overflow-hidden">
      <div className="container">
        <h1>hoge</h1>

        <p className="u-mt-8">
          <Link href="/">
            <a className="u-text-blue-600">＜ Topへ</a>
          </Link>
        </p>
      </div>
    </div>
  </div>;
}