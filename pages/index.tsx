import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import { CookiesProvider } from "react-cookie";
import styles from '../styles/Home.module.css'
import * as munsell from 'munsell';
import colors from "../static_data/colors";
import ColorList from '../components/ColorList';
import Footer from '../components/Footer';

// 全ての選択肢
const allChoices = colors.map(color => color.code);

const Index = () => {
  return (
    <CookiesProvider>
      <div className="bg-blue-50 min-h-screen">
        <Head>
          <title>クイズ</title>
        </Head>

        <div className="container mx-auto py-10 px-4">
          <h1 className="text-2xl text-gray-800 text-center font-bold mb-10">色彩検定2級 慣用色名クイズ</h1>

          {/* <div className="text-center my-8">
          <Link href="/quiz">
            <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-md py-2 px-4">
              クイズを始める
            </button>
          </Link>
        </div> */}

          <ColorList />
        </div>

        <Footer />
      </div>
    </CookiesProvider>
  )
}

export default Index;
