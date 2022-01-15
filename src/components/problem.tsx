import { NextPage } from 'next';
import Image from 'next/image';
import ProblemTitle from '../../public/images/problemTitle.png';

const Problem: NextPage = () => {
  return (
    <>
      <div className="flex flex-col px-36">
        <div>
          <Image src={ProblemTitle} />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Problem;
