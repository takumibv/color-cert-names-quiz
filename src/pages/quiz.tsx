import Link from 'next/link';
import { CookiesProvider } from "react-cookie";
import KeyboardArrowLeftRounded from '@mui/icons-material/KeyboardArrowLeftRounded';
import Seo from '../components/Seo';
import QuizList from '../components/QuizList';
import Footer from '../components/Footer';

const Quiz = () => {
  return (
    <CookiesProvider>
      <div className="bg-red-50 min-h-screen">
        <Seo title="クイズ - 色彩検定2級 慣用色名クイズ" description="" image="og_img.png" />

        <div className="container mx-auto py-10 px-4">
          <p className="mb-4">
            <Link href="/list_2">
              <a>
                <KeyboardArrowLeftRounded className="align-middle" />
                <span className="align-middle">もどる</span>
              </a>
            </Link>
          </p>
          <h1 className="text-2xl text-gray-800 text-center font-bold mb-10">色彩検定2級 慣用色名クイズ</h1>

          {/* 色を４択選んで正解不正解を出す */}
          {/* フィルター: 「ブックマーク」「高難易度」 */}
          <QuizList />

        </div>

        <Footer />
      </div>
    </CookiesProvider>
  )
}

export default Quiz;
