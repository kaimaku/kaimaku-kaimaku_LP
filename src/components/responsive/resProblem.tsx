import { NextPage } from 'next';
import Problem from '../../../public/images/responsive/problem/problem.png';
import Dots from '../../../public/images/responsive/problem/backgroundDotsImage.png';

const ResProblem: NextPage = () => {
  return (
    <>
      <div className="h-96 relative top-[320px] mx-[20px] z-20">
        <img src={Problem.src} alt="PROBLEM" className="absolute -top-4" />
        <p className="text-[20px] font-bold mt-[16px]">こんな悩みありませんか？</p>
        <div className="absolute mt-4 shadow-2xl w-full h-[215px] rounded-xl bg-white z-10">
          <div className="my-[62px]">
            <p className="text-[13px] text-center">なんとなく将来が不安だな...</p>
            <p className="text-[13px] text-center my-4">みんなと同じようなガクチカになるかも...</p>
            <p className="text-[13px] text-center">友達よりも実力をつけたいな</p>
          </div>
        </div>
      </div>
      <div className="relative z-0 top-[75px]">
        <img src={Dots.src} alt="DOTS" />
      </div>
    </>
  );
};

export default ResProblem;
