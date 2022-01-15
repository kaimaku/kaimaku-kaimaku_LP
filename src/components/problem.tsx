import { NextPage } from 'next';
import Image from 'next/image';
import ProblemTitle from '../../public/images/problemTitle.png';
import ProblemPeople from '../../public/images/problemHuman.png';
import CloserVector from '../../public/images/closerVector.png';
import FarVector from '../../public/images/farVector.png';
import HugeVector1 from '../../public/images/hugeVector1.png';
import HugeVector2 from '../../public/images/hugeVector2.png';
import HugeVector3 from '../../public/images/hugeVector3.png';

const Problem: NextPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-col px-36 py-36">
          <div className="mx-auto w-fit">
            <Image src={ProblemTitle} alt="PROBLEM" className="" />
          </div>
          <p className="text-center text-[30px] font-semibold tracking-widest pt-4">
            こんな悩みありませんか？
          </p>
        </div>

        <div className="flex flex-row">
          <div className="pt-32">
            <div className="w-96 relative left-52">
              <Image src={ProblemPeople} alt="PROBLEM PEOPLE" />
              <div className="absolute w-96 left-[300px] -top-8">
                <Image src={CloserVector} alt="CLOSER VECTOR" />
              </div>
              <div className="absolute w-96 left-[350px] -top-16">
                <Image src={FarVector} alt="FAR VECTOR" />
              </div>
              <div>
                <div className="absolute w-96 left-[385px] -top-52">
                  <Image src={HugeVector1} alt="HUGE VECTOR 1" className="relative z-0" />
                  <p className="font-bold absolute z-10 left-[26px] top-24">
                    なんとなく<span className="text-blue-400">将来が不安</span>だな...
                  </p>
                </div>
                <div className="absolute w-96 left-[700px] -top-52">
                  <Image src={HugeVector2} alt="HUGE VECTOR 2" className="relative z-0" />
                  <p className="font-bold absolute z-10 left-[28px] top-[105px]">
                    <span className="text-blue-400">ありきたりなガクチカ</span>になるかも...
                  </p>
                </div>
                <div className="absolute w-96 left-[500px] top-0">
                  <Image src={HugeVector3} alt="HUGE VECTOR 3" className="relative z-0" />
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
