import Link from 'next/link';
import Head from 'next/head'
import { CookiesProvider } from "react-cookie";
import ColorList from '../components/ColorList';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <CookiesProvider>
      <div className="bg-gray-50 min-h-screen">
        <Head>
          <title>色彩検定 慣用色名クイズ</title>
        </Head>

        <div className="container mx-auto py-10 px-4">
          <h1 className="text-3xl text-gray-800 text-center font-bold mb-16">色彩検定 慣用色名クイズ</h1>

          <div className="text-center mt-8 mb-8">
            <Link href="/list_3" passHref>
              <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white text-lg rounded-md py-3 px-8 mx-4 mb-2">
                3級
              </button>
            </Link>

            <Link href="/list_2" passHref>
              <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white text-lg rounded-md py-3 px-8 mx-4 mb-2">
                2級
              </button>
            </Link>
          </div>
          <p className="text-center text-gray-400 text-sm mb-16">※当サイトでは、サイトの利便性向上のため、クッキー(Cookie)を使用しています。</p>
        </div>

        <Footer />
      </div>
    </CookiesProvider>
  )
}

export default Index;
