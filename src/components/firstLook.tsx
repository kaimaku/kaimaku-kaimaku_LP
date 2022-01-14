import { NextPage } from 'next';
import Image from 'next/image';
import toAppstore from '../../public/images/toAppstore.png';
import layer1 from '../../public/images/layer1.png';
import layer2 from '../../public/images/layer2.png';
import layer3 from '../../public/images/layer3.png';
import backgroundImage from '../../public/images/backgroundImage.png';

const FirstLook: NextPage = () => {
  return (
    <>
      <div className="pt-16 bg-blue-200">
        <div className="flex flex-row px-36">
          <div className="flex flex-col mr-12 ml-12 max-w-3xl">
            <a href="#">カイマクロゴ</a>
            <div>
              <p className="text-[52px] font-bold whitespace-nowrap mt-32">
                大学生活で
                <br />
                何かを本気で
                <br />
                頑張ってみたいあなたへ
              </p>
              <p className="text-[24px] whitespace-nowrap">
                学生と企業をつなぐ長期インターンマッチングアプリ
              </p>
              <a href="#" className="-ml-4">
                <Image src={toAppstore} width={250} height={96} />
              </a>
            </div>
          </div>
          <div className="relative w-full -ml-20">
            <div className="absolute left-32 top-16">
              <Image src={layer1} width={380} height={454} className="z-30 absolute" />
            </div>
            <div className="absolute top-4 left-16">
              <Image src={layer2} width={440} height={596} className="z-20 absolute" />
            </div>
            <div className="absolute top-12">
              <Image src={layer3} width={480} height={560} className="z-10 absolute" />
            </div>

            {/* 一応写っているもののわかりずらい */}
            <Image src={backgroundImage} width={653} height={653} className="absolute z-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstLook;
