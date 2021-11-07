import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as munsell from 'munsell';
import colors from "../data/colors";
import ColorList from '../components/ColorList';

// 全ての選択肢
const allChoices = colors.map(color => color.code);

export default () => {
  return (
    <div className="">
      <Head>
        <title>クイズ</title>
      </Head>

      <div className="container py-6 px-4 mx-auto">
        <h1 className="text-2xl text-gray-800 text-center font-bold mb-4">色彩検定2級 慣用色名クイズ</h1>

        {/* <div className="text-center my-8">
          <Link href="/quiz">
            <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-md py-2 px-4">
              クイズを始める
            </button>
          </Link>
        </div> */}

        <ColorList />
      </div>
    </div>
  )
}
