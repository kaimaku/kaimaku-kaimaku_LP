import { NextPage } from 'next';

import TakeTheLead from '../../public/images/proposal/takeTheLead.png';
import Knowledge from '../../public/images/proposal/knowledge.png';
import JobHunting from '../../public/images/proposal/jobHunting.png';
import VectorRight from '../../public/images/proposal/proposalVectorRight.png';
import VectorLeft from '../../public/images/proposal/proposalVectorLeft.png';
import ProposalTitle from '../../public/images/proposal/proposalTitle.png';

const Proposal: NextPage = () => {
  return (
    <>
      <div className="flex flex-col mb-24 w-full">
        <div className="relative z-0">
          <div className="absolute right-0 top-40">
            <img src={VectorRight.src} />
          </div>
          <div className="absolute left-0 -top-12">
            <img src={VectorLeft.src} />
          </div>
        </div>
        <div className="px-36 mb-[110px]">
          <div className="mx-auto w-fit">
            <img src={ProposalTitle.src} alt="PROPOSAL" />
          </div>
          <p className="text-center text-[30px] font-semibold tracking-widest pt-4">
            長期インターンしてみては？
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px] z-10 mx-8 xl:mx-40">
          <div className="w-[360px] h-80 rounded-3xl shadow-2xl bg-white">
            <div className="w-fit mx-auto mt-[71px] mb-[30px]">
              <img src={TakeTheLead.src} />
            </div>
            <div>
              <p className="text-center font-bold text-[20px] mb-5">大学生の3%</p>
              <article className="px-12 text-[12px]">
                大学生の中で長期インターンに行っている割合は
                3%しかおらず、他の学生とガクチカなど差別化 を図ることができる。
              </article>
            </div>
          </div>
          <div className="w-[360px] h-80 rounded-3xl shadow-2xl bg-white">
            <div className="w-fit mx-auto mt-[71px] mb-[30px]">
              <img src={Knowledge.src} />
            </div>
            <div>
              <p className="text-center font-bold text-[20px] mb-5">学べて、稼げて、一石二鳥</p>
              <article className="px-12 text-[12px]">
                長期インターンシップではアルバイトと比べ、なかなか経験できない責任ある仕事や面白いことにチャレンジできる。
              </article>
            </div>
          </div>
          <div className="w-[360px] h-80 rounded-3xl shadow-2xl bg-white">
            <div className="w-fit mx-auto mt-[71px] mb-[30px]">
              <img src={JobHunting.src} />
            </div>
            <div>
              <p className="text-center font-bold text-[20px] mb-5">就活で有利に働く</p>
              <article className="px-12 text-[12px]">
                社会人として働くことを経験している学生は、自身の経験から「自分の強み」をアピールできるため、説得力のあるプレゼンができる。
              </article>
            </div>
          </div>
        </div>
        <div className="mt-52 mx-auto">
          <p className="text-[24px] font-bold mb-[13px] text-center">けどハードル高そう...</p>
          <p className="text-[16px] text-center">そういう時は...</p>
        </div>
      </div>
    </>
  );
};

export default Proposal;
