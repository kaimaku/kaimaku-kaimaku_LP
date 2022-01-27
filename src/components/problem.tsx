import { NextPage } from 'next';

import ProblemTitle from '../../public/images/problem/problemTitle.png';
import ProblemPeople from '../../public/images/problem/problemHuman.png';
import CloserVector from '../../public/images/problem/closerVector.png';
import FarVector from '../../public/images/problem/farVector.png';
import HugeVector1 from '../../public/images/problem/hugeVector1.png';
import HugeVector2 from '../../public/images/problem/hugeVector2.png';
import HugeVector3 from '../../public/images/problem/hugeVector3.png';

const Problem: NextPage = () => {
  return (
    <>
      <div className="mb-56 w-full">
        <div className="flex flex-col px-36 pt-36 mb-40">
          <div className="mx-auto w-fit">
            <img src={ProblemTitle.src} alt="PROBLEM" />
          </div>
          <p className="text-center text-[30px] font-semibold tracking-widest pt-4">
            こんな悩みありませんか？
          </p>
        </div>

        <div className="flex flex-row w-full">
          <div className="pt-32">
            <div className="relative ml-4 xl:ml-40 mr-40">
              <img src={ProblemPeople.src} alt="PROBLEM PEOPLE" />
              <div className="absolute w-96 left-[300px] -top-8">
                <img src={CloserVector.src} alt="CLOSER VECTOR" />
              </div>
              <div className="absolute w-96 left-[350px] -top-16">
                <img src={FarVector.src} alt="FAR VECTOR" />
              </div>
              <div>
                <div className="absolute w-96 left-[385px] -top-52">
                  <img src={HugeVector1.src} alt="HUGE VECTOR 1" className="relative z-0" />
                  <p className="font-bold absolute z-10 left-[26px] top-24">
                    なんとなく<span className="text-blue-400">将来が不安</span>だな...
                  </p>
                </div>
                <div className="absolute w-80 left-[700px] -top-52">
                  <img src={HugeVector2.src} alt="HUGE VECTOR 2" className="relative z-0" />
                  <p className="font-bold absolute z-10 left-[28px] top-[105px]">
                    <span className="text-blue-400">ありきたりなガクチカ</span>になるかも...
                  </p>
                </div>
                <div className="absolute w-96 left-[500px] top-0">
                  <img src={HugeVector3.src} alt="HUGE VECTOR 3" className="relative z-0" />
                  <p className="font-bold absolute z-10 left-[28px] top-[92px]">
                    友達よりも<span className="text-blue-400">実力をつけたい</span>な...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
