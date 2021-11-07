import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as munsell from 'munsell';
import colors from "../static_data/colors";

// 全ての選択肢
const allChoices = colors.map(color => color.code);

const Quiz = () => {
  return (
    <div className="">
      <Head>
        <title>クイズ</title>
      </Head>

      <div className="container py-6 px-4 mx-auto">
        <h1 className="text-2xl text-gray-800 text-center font-bold mb-4">色彩慣用句クイズ</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4  gap-4">

          {colors.map(color => (
            <div key={`color-${color.code}`} className="mb-6">
              <div className="align-middle h-24 mb-2" style={{ background: color.code }}></div>
              <div className="flow-root mb-1">
                <p className="font-bold inline-block mr-2">{color.name}{color.yomi !== "" && `(${color.yomi})`}</p>
                <p className="float-right">{munsell.hexToMunsell(color.code)}</p>
              </div>
              <p className="text-gray-400">{color.explain}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Quiz;
