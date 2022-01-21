import { NextPage } from 'next';
import Image from 'next/image';

import Menu from '../../public/images/footer/menu.png';
import Logo from '../../public/images/footer/footerLogo.png';

const Footer: NextPage = () => {
  return (
    <>
      <div className="mt-[200px] bg-[#2F2E40] h-[330px] px-[200px] pt-[57px]">
        <div className="flex flex-col">
          <div className="w-fit">
            <Image src={Menu} alt="MENU" />
          </div>
          <div className="flex flex-row text-white mt-[18px] mb-3 text-[14px]">
            <a href="#" className="mr-16">
              利用規約
            </a>
            <a href="#" className="mr-52">
              プライバシーポリシー
            </a>
            <a href="#" className="mr-24">
              学生向け
            </a>
            <a href="#">企業向け</a>
          </div>
          <div className="flex flex-row text-white text-[14px]">
            <a href="#" className="mr-24">
              会社概要
            </a>
            <a href="#">お問い合せ</a>
          </div>
          <div className="w-fit mt-[100px]">
            <Image src={Logo} alt="LOGO" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
