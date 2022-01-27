import { NextPage } from 'next';

import Circle from '../../../../public/images/features/rightImage/circle.png';
import Chatting1 from '../../../../public/images/features/rightImage/chatting1.png';
import Chatting2 from '../../../../public/images/features/rightImage/chatting2.png';

const ResRightIcon: NextPage = () => {
  return (
    <>
      <div className="flex flex-col mx-auto">
        <div className="w-fit relative z-10 mx-auto">
          <img src={Circle.src} alt="CIRCLE" />
          <div className="absolute z-20 w-fit top-[52px] -right-[42px]">
            <img src={Chatting1.src} alt="CHATTING1" />
          </div>
          <div className="absolute z-20 w-fit top-[140px] left-[10px]">
            <img src={Chatting2.src} alt="CHATTING2" />
          </div>
        </div>
        <div>
          <p className="font-bold text-center text-[20px] mt-[18px]">メッセージ</p>
          <p className="text-[12px] text-gray-500 text-center mt-[8px]">
            「応募する」というハードルを越えることなく
            <br />
            企業側からのオファーがきます
          </p>
        </div>
      </div>
    </>
  );
};

export default ResRightIcon;
