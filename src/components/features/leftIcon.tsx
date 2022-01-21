import { NextPage } from 'next';
import Business from '../../../public/images/features/leftImage/business.png';
import Circle from '../../../public/images/features/leftImage/circle.png';
import Engineer from '../../../public/images/features/leftImage/engineer.png';
import Avatar from '../../../public/images/features/leftImage/avatar.png';

const LeftIcon: NextPage = () => {
  return (
    <>
      <div className="flex flex-col mr-[105px]">
        <div className="w-fit relative z-10">
          <img src={Circle.src} alt="CIRCLE" />
          <div className="absolute w-fit top-[45px] left-[98px] z-20">
            <img src={Avatar.src} alt="AVATAR" />
          </div>
          <div className="absolute w-fit top-[140px] left-[65px] z-20">
            <img src={Business.src} alt="BUSINESS" />
          </div>
          <div className="absolute w-fit top-[188px] left-[72px] z-20">
            <img src={Engineer.src} alt="ENGINEER" />
          </div>
        </div>
        <div>
          <p className="font-bold text-center mt-[56px]">約5分で登録完了</p>
          <p className="text-[12px] text-gray-500 text-center mt-[32px]">登録はタップで簡単</p>
        </div>
      </div>
    </>
  );
};

export default LeftIcon;
