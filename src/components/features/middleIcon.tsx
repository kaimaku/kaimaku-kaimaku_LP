import { NextPage } from 'next';
import Image from 'next/image';

import Circle from '../../../public/images/features/middleImage/circle.png';
import Building from '../../../public/images/features/middleImage/building.png';
import Button1 from '../../../public/images/features/middleImage/button1.png';
import Button2 from '../../../public/images/features/middleImage/button2.png';

const MiddleIcon = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-fit relative z-10">
          <Image src={Circle} alt="CIRCLE" />
          <div className="w-fit absolute z-20 top-[45px] left-[90px]">
            <Image src={Building} alt="BUILDING" />
          </div>
          <div className="w-fit absolute z-20 top-[185px] left-[92px]">
            <Image src={Button2} alt="BUTTON2" />
          </div>
          <div className="w-fit absolute z-20 top-[185px] left-[148px]">
            <Image src={Button1} alt="BUTTON1" />
          </div>
        </div>
        <div>
          <p className="font-bold text-center mt-[56px]">スワイプマッチング</p>
          <p className="text-[12px] text-gray-500 text-center mt-[32px]">
            自分が少しでも興味ある企業に簡単な操作で
            <br />
            その意思を伝える事ができます
          </p>
        </div>
      </div>
    </>
  );
};

export default MiddleIcon;
