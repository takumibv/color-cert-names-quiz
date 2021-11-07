import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as munsell from 'munsell';
import colors from "../data/colors";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>クイズ</title>
      </Head>

      <div className="container py-6 mx-auto">
        <h1 className="text-2xl text-gray-800 text-center font-bold">色彩慣用句クイズ</h1>

        {colors.map(color => (
          <div key={`color-${color.code}`} className="mb-2">
            {color.name}{color.yomi !== "" && `(${color.yomi})`}
            <div className="inline-block align-middle mx-2 h-4 w-4" style={{ background: color.code }}></div>
            <span className="text-gray-400">{color.explain}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
