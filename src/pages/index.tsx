import { NextPage } from 'next';
import Head from 'next/head';

import Features from '../components/features/features';
import FirstLook from '../components/firstLook';
import Problem from '../components/problem';
import Proposal from '../components/proposal';
import Proposal2 from '../components/proposal2';
import Voice from '../components/voice/voice';
import Footer from '../components/footer';

import ResProblem from '../components/responsive/resProblem';
import ResFirstLook from '../components/responsive/resFirstLook';
import ResProposal from '../components/responsive/resProposal';
import ResFeature from '../components/responsive/resFeatures/resFeatures';
import ResVoice from '../components/responsive/resVoice/resVoice';
import ResFooter from '../components/responsive/resFooter';

import Logo from '../../public/images/logoImage.png';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kaimaku | 長期インターンのマッチングアプリ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:description"
          content="kaimakuは初めての長期インターンを探す人向けのマッチングアプリです。毎日おすすめされる求人を学生は選ぶだけ。"
        />
        <meta property="og:title" content="長期インターンを探すためのマッチングアプリKaimaku" />
        <meta property="og:image" content={Logo.src} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kaimaku-user.web.app/" />
        <link rel="icon" type="image/png" sizes="32x32" href={Logo.src} />
      </Head>
      <div className="">
        <div className="hidden lg:block">
          <FirstLook />
          <Problem />
          <Proposal />
          <Proposal2 />
          <Features />
          <Voice />
          <Footer />
        </div>
        <div className="block lg:hidden">
          <ResFirstLook />
          <ResProblem />
          <ResProposal />
          <ResFeature />
          <ResVoice />
          <ResFooter />
        </div>
      </div>
    </>
  );
};

export default Home;
