import Link from 'next/link';
import Head from 'next/head'
import { Cookies, CookiesProvider } from "react-cookie";
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';
import QuizList from '../components/QuizList';
import Footer from '../components/Footer';

const Quiz = () => {
  return (
    <CookiesProvider>
      <div className="bg-blue-50 min-h-screen">
        <Head>
          <title>色彩検定2級 慣用色名クイズ</title>
        </Head>

        <div className="container mx-auto py-10 px-4">
          <p className="mb-4">
            <Link href="/">
              <a>
                <KeyboardArrowLeftRounded className="align-middle" />
                <span className="align-middle">もどる</span>
              </a>
            </Link>
          </p>
          <h1 className="text-2xl text-gray-800 text-center font-bold mb-10">色彩検定2級 慣用色名クイズ</h1>

          {/* 色を４択選んで正解不正解を出す */}
          <QuizList />

        </div>

        <Footer />
      </div>
    </CookiesProvider>
  )
}

export default Quiz;
