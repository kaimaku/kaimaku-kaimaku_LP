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
      <div className="h-[700px] w-full relative overflow-x-hidden">
        <img src={BackgroundBaseImage.src} height={600} className="z-0 w-full" />
        <div className="flex flex-col-reverse w-screen md:flex-row px-28 absolute top-32">
          <div className="flex flex-col mx-12 max-w-3xl -mt-[550px] md:mt-0">
            <a
              href="https://apps.apple.com/jp/app/kaimaku-%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AE%E9%95%B7%E6%9C%9F%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%B3/id1592892805"
              className="-mt-12"
            >
              <div className="hidden md:block">
                <div className="flex flex-row gap-2">
                  <img src={LogoImage.src} alt="Logo Image" />
                  <img src={LogoText.src} alt="Logo Text" />
                </div>
              </div>
            </a>
            <div>
              <p className="text-[90px] md:text-[52px] font-bold whitespace-nowrap mt-32 ml-0">
                大学生活で
                <br />
                何かを本気で
                <br />
                頑張ってみたいあなたへ
              </p>
              <p className="text-[24px] whitespace-nowrap py-8 ml-40 md:ml-0">
                学生と企業をつなぐ長期インターンマッチングアプリ
              </p>
              <a
                href="https://apps.apple.com/jp/app/kaimaku-%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AE%E9%95%B7%E6%9C%9F%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%B3/id1592892805"
                className="ml-[400px] md:-ml-4"
              >
                <img src={toAppstore.src} width={250} height={96} />
              </a>
            </div>
          </div>
          <div className=" w-full -ml-20">
            <img
              src={Layer1.src}
              alt="layer1"
              width={380}
              height={454}
              className="z-30 absolute top-[80px] right-[205px]"
            />
            <img
              src={Layer2.src}
              alt="layer2"
              width={430}
              height={596}
              className="z-20 absolute top-[38px] right-[245px]"
            />
            <img
              src={Layer3.src}
              alt="layer3"
              width={480}
              height={560}
              className="z-10 absolute top-12 right-[260px]"
            />
          </div>
          <div>
            <div className="absolute border border-white rounded-full w-[380px] h-[380px] right-[150px] -top-4 opacity-20">
              <div className="absolute border border-white rounded-full w-[250px] h-[250px] top-[60px] right-[65px] opacity-90"></div>
              <div className="absolute border border-white rounded-full w-[190px] h-[190px] top-[90px] right-[95px] opacity-90"></div>
              <div className="absolute border border-white rounded-full w-[90px] h-[90px] top-[135px] right-[145px] opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstLook;
