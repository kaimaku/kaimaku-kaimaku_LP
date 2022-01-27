import { NextPage } from 'next';

import Logo from '../../../public/images/responsive/footer/footerLogo.png';
import Menu from '../../../public/images/responsive/footer/menu.png';
import Faq from '../../../public/images/responsive/footer/FAQ.png';

const ResFooter: NextPage = () => {
  return (
    <>
      <div className="bg-[#2F2E40] h-[370px] relative top-[2020px] flex flex-row">
        <div className="flex flex-col text-white mt-10 mr-10 ml-6">
          <img src={Menu.src} alt="MENU" width={32} />
          <a href="" className="mt-10 mb-8 text-[14px]">
            利用規約
          </a>
          <a href="" className="mb-8 text-[14px]">
            会社概要
          </a>
          <a href="" className="mb-8 text-[14px]">
            プライバシーポリシー
          </a>
          <a href="" className="mb-10 text-[14px]">
            お問い合わせ
          </a>
          <img src={Logo.src} alt="KAIMAKU" width={66} />
        </div>
        <div className="flex flex-col text-white mt-10">
          <img src={Faq.src} alt="FAQ" width={24} />
          <a href="" className="mt-10 mb-8 text-[14px]">
            タレント向け
          </a>
          <a href="" className="text-[14px]">
            企業向け
          </a>
        </div>
      </div>
    </>
  );
};

export default ResFooter;
