import { NextPage } from 'next';

import ResLeftIcon from './resLeftIcon';
import ResRightIcon from './resRightIcon';
import ResMiddleIcon from './resMiddleIcon';

import Features from '../../../../public/images/responsive/features/features.png';
import Title from '../../../../public/images/responsive/features/title.png';
import ConnectingLine from '../../../../public/images/responsive/features/connectingLine.png';

const ResFeature: NextPage = () => {
  return (
    <>
      <div className="relative top-[1800px]">
        <img src={Features.src} alt="FEATURES" className="mx-auto" />
        <img src={Title.src} alt="KAIMAKUの特徴" className="mx-auto mt-4" />
        <div className="left-0 right-0 mx-auto">
          <img
            src={ConnectingLine.src}
            alt="Connecting Line"
            className="absolute z-0 right-0 left-0 mx-auto top-[200px]"
          />
          <ResLeftIcon />
          <ResMiddleIcon />
          <ResRightIcon />
        </div>
      </div>
    </>
  );
};

export default ResFeature;
