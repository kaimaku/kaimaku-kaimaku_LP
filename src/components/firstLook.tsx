import { NextPage } from 'next';

import toAppstore from '../../public/images/toAppstore.png';
import Layer1 from '../../public/images/layer1.png';
import Layer2 from '../../public/images/layer2.png';
import Layer3 from '../../public/images/layer3.png';
import BackgroundBaseImage from '../../public/images/backgroundBaseImage.png';
import LogoImage from '../../public/images/logoImage.png';
import LogoText from '../../public/images/logoText.png';

const FirstLook: NextPage = () => {
  return (
    <>
      <div className="mb-40 w-full">
        <img src={BackgroundBaseImage.src} width={1600} height={600} className="z-0 w-full" />
        <div className="flex flex-row px-36 absolute top-32">
          <div className="flex flex-col mx-12 max-w-3xl">
            <a
              href="https://apps.apple.com/jp/app/kaimaku-%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AE%E9%95%B7%E6%9C%9F%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%B3/id1592892805"
              className="-mt-12"
            >
              <div className="flex flex-row gap-2">
                <img src={LogoImage.src} alt="Logo Image" />
                <img src={LogoText.src} alt="Logo Text" />
              </div>
            </a>
            <div>
              <p className="text-[52px] font-bold whitespace-nowrap mt-32">
                大学生活で
                <br />
                何かを本気で
                <br />
                頑張ってみたいあなたへ
              </p>
              <p className="text-[24px] whitespace-nowrap py-8">
                学生と企業をつなぐ長期インターンマッチングアプリ
              </p>
              <a href="#" className="-ml-4">
                <img src={toAppstore.src} width={250} height={96} />
              </a>
            </div>
          </div>
          <div className="relative w-full -ml-20">
            <img
              src={Layer1.src}
              alt="layer1"
              width={380}
              height={454}
              className="z-30 absolute -right-12 top-16"
            />
            <img
              src={Layer2.src}
              alt="layer1"
              width={440}
              height={596}
              className="z-20 absolute top-4 left-16"
            />
            <img
              src={Layer3.src}
              alt="layer1"
              width={480}
              height={560}
              className="z-10 absolute top-12"
            />
            <div className="relative border border-white rounded-full w-[462px] h-[462px] left-36 -top-12 opacity-20">
              <div className="absolute border border-white rounded-full w-[320px] h-[320px] top-[70px] left-[70px]"></div>
              <div className="absolute border border-white rounded-full w-[211px] h-[211px] top-[125px] left-[125px]"></div>
              <div className="absolute border border-white rounded-full w-[160px] h-[160px] top-[150px] left-[150px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstLook;
