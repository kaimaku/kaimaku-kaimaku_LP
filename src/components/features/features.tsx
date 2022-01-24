import { NextPage } from 'next';
import Title from '../../../public/images/features/featuresTitle.png';
import JapaneseTitle from '../../../public/images/features/titleJP.png';
import ConnectingLine from '../../../public/images/connectingLine.png';
import LeftIcon from './leftIcon';
import MiddleIcon from './middleIcon';
import RightIcon from './rightIcon';

const Features: NextPage = () => {
  return (
    <>
      <div className="flex flex-col mb-56 w-[1720px] md:w-screen">
        <div className="mx-auto w-fit flex flex-col">
          <img src={Title.src} alt="FEATURES" />
        </div>
        <div className="mx-auto w-fit mt-8">
          <img src={JapaneseTitle.src} alt="KAIMAKUの特徴" />
        </div>
        <div className="flex flex-row relative mx-auto mt-28">
          <div className="w-fit absolute z-0 -top-[20px] left-[140px]">
            <img src={ConnectingLine.src} alt="CONNECTING LINE" />
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
