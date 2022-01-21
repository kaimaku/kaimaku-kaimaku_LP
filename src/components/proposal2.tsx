import { NextPage } from 'next';
import Image from 'next/image';
import RightCircle from '../../public/images/proposal/rightCircle.png';
import LeftCircle from '../../public/images/proposal/leftCircle.png';
import Iphone1 from '../../public/images/proposal/proposalIphone.png';
import Iphone2 from '../../public/images/proposal/proposalIphone2.png';
import ToAppleStore from '../../public/images/toAppstore.png';
import LogoText from '../../public/images/proposal/logoText2.png';

const Proposal2: NextPage = () => {
  return (
    <>
      <div className="flex flex-row mb-[470px]">
        <div className="relative w-[660px]">
          <div className="absolute left-0 z-0">
            <Image src={LeftCircle} />
          </div>
          <div className="absolute left-80 top-[420px] z-0">
            <Image src={RightCircle} />
          </div>
          <div className="w-fit absolute left-44 top-20 z-10">
            <Image src={Iphone1} />
          </div>
          <div className="w-fit absolute left-44 top-32 z-20">
            <Image src={Iphone2} />
          </div>
        </div>
        <div className="mt-48">
          <div className="mb-8">
            <Image src={LogoText} />
          </div>
          <p className="w-[644px] leading-loose text-[20px]">
            カイマクは長期インターンに参加する
            <span className="text-blue-300">ハードルを下げたサービス</span>
            です。
            <br />
            少しでも興味ある企業に<span className="text-blue-300">スワイプマッチング</span>
            を行うことで、その意思を
            <br />
            簡単に伝える事ができます。また、「自分から応募する」というハード
            <br />
            ルを超えることなく
            <span className="text-blue-300">企業からオファー</span>を受け取ることができます。
          </p>
          <a
            href="https://apps.apple.com/jp/app/kaimaku-%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AE%E9%95%B7%E6%9C%9F%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%B3/id1592892805"
            className="absolute right-32 mt-12"
          >
            <Image src={ToAppleStore} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Proposal2;
