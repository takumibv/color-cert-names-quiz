import Link from 'next/link';
import Head from 'next/head'
import { CookiesProvider } from "react-cookie";
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';
import ColorList from '../components/ColorList';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <CookiesProvider>
      <div className="bg-red-50 min-h-screen">
        <Head>
          <title>色彩検定2級 慣用色名クイズ</title>
        </Head>

        <div className="container mx-auto py-10 px-4">
          <p className="mb-4">
            <Link href="/">
              <a>
                <KeyboardArrowLeftRounded className="align-middle" />
                <span className="align-middle">TOPへ</span>
              </a>
            </Link>
          </p>
          <h1 className="text-2xl text-gray-800 text-center font-bold mb-10">2級に出てくる慣用色名</h1>

          <div className="text-center mt-8 mb-16">
            <Link href="/quiz">
              <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-md py-2 px-4">
                クイズを始める
              </button>
            </Link>
          </div>

          {/* フィルター: 「ランダムに並べる」「色・名前を隠す」「ブックマーク」「正答率が低い順」 */}
          <ColorList />
        </div>

        <Footer />
      </div>
    </CookiesProvider>
  )
}

export default Index;
