import toAppstore from '../../../public/images/toAppstore.png';
import Layer1 from '../../../public/images/layer1.png';
import Layer2 from '../../../public/images/layer2.png';
import Layer3 from '../../../public/images/layer3.png';
import BackgroundBaseImage from '../../../public/images/backgroundBaseImage.png';
import { NextPage } from 'next';
import Logo from '../../../public/images/responsive/logo.png';
import Text from '../../../public/images/responsive/kaimakuText.png';
import ResBackgroundBaseImage from '../../../public/images/responsive/resBackgroundBaseImage.png';

const ResFirstLook: NextPage = () => {
  return (
    <>
      <div>
        <img
          src={ResBackgroundBaseImage.src}
          alt="レスポンシブ"
          width={1600}
          className="z-0 block relative"
        />
      </div>
      <div className="absolute z-10 w-full top-0 flex flex-col">
        <div>
          <a href="#" className="flex flex-row absolute top-[70px] left-8 gap-2">
            <img src={Logo.src} alt="LOGO" />
            <img src={Text.src} alt="TEXT" />
          </a>
        </div>
        <div className="relative top-[100px] w-full">
          <img
            className="w-[190px] absolute z-40 right-4 top-2"
            src={Layer1.src}
            alt="responsiveLayer1"
          />
          <img
            className="w-[270px] absolute z-30 right-[4px] -top-[22px]"
            src={Layer2.src}
            alt="responsiveLayer2"
          />
          <img
            className="w-[300px] absolute z-20 right-4 -top-4"
            src={Layer3.src}
            alt="responsiveLayer3"
          />
          <div className="w-full -top-12 z-10 h-[400px] relative overflow-hidden">
            <div className="absolute border border-white rounded-full w-[220px] h-[220px] top-[4px] -right-[44px] opacity-20 overflow-hidden "></div>
            <div className="absolute border border-white rounded-full w-[160px] h-[160px] top-[34px] -right-[12px] z-10 opacity-30"></div>
            <div className="absolute border border-white rounded-full w-[100px] h-[100px] top-[65px] right-[19px] z-10 opacity-50"></div>
            <div className="absolute border border-white rounded-full w-[48px] h-[48px] top-[92px] right-[46px] z-10 opacity-60"></div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute font-bold text-[24px] -top-[44px] left-[32px]">
            <p className="mb-1">大学生活で</p>
            <p className="mb-1">何かを本気で</p>
            <p className="mb-1">頑張ってみたいあなたへ</p>
          </div>
          <p className="absolute top-[88px] text-[12px] left-[32px]">
            学生と企業をつなぐ長期インターンマッチングアプリ
          </p>
        </div>
      </div>
    </>
  );
};
export default ResFirstLook;
