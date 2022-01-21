import { NextPage } from 'next';
import Image from 'next/image';

import Title from '../../../public/images/features/featuresTitle.png';
import JapaneseTitle from '../../../public/images/features/titleJP.png';
import ConnectingLine from '../../../public/images/connectingLine.png';
import LeftIcon from './leftIcon';
import MiddleIcon from './middleIcon';
import RightIcon from './rightIcon';

const Features: NextPage = () => {
  return (
    <>
      <div className="flex flex-col mb-24">
        <div className="mx-auto w-fit flex flex-col">
          <Image src={Title} alt="FEATURES" />
        </div>
        <div className="mx-auto w-fit mt-8">
          <Image src={JapaneseTitle} alt="KAIMAKUの特徴" />
        </div>
        <div className="flex flex-row relative mx-auto mt-28">
          <div className="w-fit absolute z-0 -top-[20px] left-[140px]">
            <Image src={ConnectingLine} alt="CONNECTING LINE" />
          </div>
          <LeftIcon />
          <MiddleIcon />
          <RightIcon />
        </div>
      </div>
    </>
  );
};

export default Features;
