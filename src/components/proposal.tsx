import { NextPage } from 'next';
import Image from 'next/image';
import TakeTheLead from '../../public/images/takeTheLead.png';
import Knowledge from '../../public/images/knowledge.png';
import JobHunting from '../../public/images/jobHunting.png';
import VectorRight from '../../public/images/proposalVectorRight.png';
import VectorLeft from '../../public/images/proposalVectorLeft.png';
import ProposalTitle from '../../public/images/proposalTitle.png';

const Proposal: NextPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative z-0">
          <div className="absolute right-0 top-40">
            <Image src={VectorRight} />
          </div>
          <div className="absolute left-0 -top-12">
            <Image src={VectorLeft} />
          </div>
        </div>
        <div className="px-36 mb-[110px]">
          <div className="mx-auto w-fit">
            <Image src={ProposalTitle} alt="PROPOSAL" />
          </div>
          <p className="text-center text-[30px] font-semibold tracking-widest pt-4">
            長期インターンしてみては？
          </p>
        </div>
        <div className="mx-auto grid grid-cols-3 gap-[30px] z-10">
          <div className="w-[360px] h-80 rounded-3xl shadow-2xl bg-white">
            <div className="w-fit mx-auto mt-[71px] mb-[30px]">
              <Image src={TakeTheLead} />
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
              <Image src={Knowledge} />
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
              <Image src={JobHunting} />
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
