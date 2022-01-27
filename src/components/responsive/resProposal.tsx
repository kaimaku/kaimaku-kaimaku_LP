import { NextPage } from 'next';
import Proposal from '../../../public/images/responsive/proposal/proposal.png';
import TakeTheLead from '../../../public/images/responsive/proposal/takeTheLead.png';
import Knowledge from '../../../public/images/responsive/proposal/knowledge.png';
import JobHunting from '../../../public/images/responsive/proposal/jobHunting.png';
import LeftVector from '../../../public/images/responsive/proposal/leftVector.png';
import RightVector from '../../../public/images/responsive/proposal/rightVector.png';
// import Division from '../../../public/images/responsive/proposal/division.png';
import Logo from '../../../public/images/responsive/proposal/kaimakuLogo.png';
import LeftCircle from '../../../public/images/responsive/proposal/leftCircle.png';
import RightCircle from '../../../public/images/responsive/proposal/rightCircle.png';
import IPhoneImage from '../../../public/images/responsive/proposal/iPhoneImage.png';
import MatchingCard from '../../../public/images/responsive/proposal/matchingCard.png';

const ResProposal: NextPage = () => {
  return (
    <>
      <div className="w-full relative top-[120px]">
        <img
          src={RightVector.src}
          alt="RIGHT VECTOR"
          className="absolute right-0 top-[520px] z-0"
        />
        <img src={LeftVector.src} alt="LEFT VECTOR" className="absolute left-0 top-[240px] z-0" />
        <div className="w-full absolute z-10">
          <img src={Proposal.src} alt="PROPOSAL" className="ml-[20px]" />
          <p className="text-[20px] font-bold mt-[8px] ml-[20px]">長期インターンしてみては？</p>
          <div className="flex flex-col mt-4 gap-8 mx-[20px]">
            <div className="w-full h-[260px] shadow-2xl bg-white align-middle py-[46px] rounded-xl">
              <img src={TakeTheLead.src} alt="TAKE THE LEAD" className="mx-auto" />
              <p className="font-bold text-[20px] text-center my-[24px]">大学生の3%</p>
              <p className="text-[12px] mx-auto w-[263px]">
                大学生の中で長期インターンに行っている割合は
                3%しかおらず、他の学生とガクチカなど差別化 を図ることができる。
              </p>
            </div>
            <div className="w-full h-[260px] shadow-2xl bg-white align-middle py-[46px] rounded-xl">
              <img src={Knowledge.src} alt="TAKE THE LEAD" className="mx-auto" />
              <p className="font-bold text-[20px] text-center my-[24px]">
                学べて、稼げて、一石二鳥
              </p>
              <p className="text-[12px] mx-auto w-[263px]">
                長期インターンシップではアルバイトと比べ、なかなか経験できない責任ある仕事や面白いことにチャレンジできる。
              </p>
            </div>
            <div className="w-full h-[260px] shadow-2xl bg-white align-middle py-[46px] rounded-xl">
              <img src={JobHunting.src} alt="TAKE THE LEAD" className="mx-auto" />
              <p className="font-bold text-[20px] text-center my-[24px]">就活で有利に働く</p>
              <p className="text-[12px] mx-auto w-[263px]">
                社会人として働くことを経験している学生は、自身の経験から「自分の強み」をアピールできるため、説得力のあるプレゼンができる。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 top-[1150px]">
        <p className="text-[20px] font-bold text-center">けど、ハードル高そう...</p>
        <p className="text-[12px] text-center mt-8 mb-[75px]">そういう時は</p>
        {/* <img src={Division.src} alt="BORDER" className="mx-auto" /> */}
        <img src={Logo.src} alt="LOGO" className="mt-[90px] mx-auto" />
        <hr className="text-color-[#F6F6F6] w-[130px] mx-auto mt-[36px]" />
        <p className="mt-[30px] text-[12px] w-[263px] mx-auto">
          カイマクは長期インターンに参加する
          <span className="text-blue-400">ハードルを下げたサービス</span>
          です。少しでも興味ある企業に<span className="text-blue-400">スワイプマッチング</span>
          を行うことで、その意思を簡単に伝える事ができます。また、「自分から応募する」というハードルを超えることなく
          <span className="text-blue-400">企業からオファー</span>を受け取ることができます。
        </p>
        <div className="relative w-full">
          <img src={LeftCircle.src} alt="Circle" className="absolute left-0 top-[55px] z-0" />
          <img src={RightCircle.src} alt="Circle" className="absolute right-0 top-[375px] z-0" />
          <div className="overflow-hidden absolute z-10 right-0 left-[55px] mx-auto top-[80px]">
            <img src={IPhoneImage.src} alt="IPhone" className="" />
          </div>
          <img
            src={MatchingCard.src}
            alt="MatchingCardImage"
            className="absolute z-20 right-0 top-[125px]"
          />
        </div>
      </div>
    </>
  );
};

export default ResProposal;
