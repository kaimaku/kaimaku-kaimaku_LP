import { NextPage } from 'next';
import Features from '../components/features/features';
import FirstLook from '../components/firstLook';
import Problem from '../components/problem';
import Proposal from '../components/proposal';
import Proposal2 from '../components/proposal2';
import Voice from '../components/voice/voice';
import Footer from '../components/footer';

import ResProblem from '../components/responsive/resProblem';
import ResFirstLook from '../components/responsive/resFirstLook';
import ResProposal from '../components/responsive/resProposal';
import ResFeature from '../components/responsive/resFeatures/resFeatures';
import ResVoice from '../components/responsive/resVoice/resVoice';
import ResFooter from '../components/responsive/resFooter';

const Home: NextPage = () => {
  return (
    <>
      <div className="">
        <div className="hidden lg:block">
          <FirstLook />
          <Problem />
          <Proposal />
          <Proposal2 />
          <Features />
          <Voice />
          <Footer />
        </div>
        <div className="block lg:hidden">
          <ResFirstLook />
          <ResProblem />
          <ResProposal />
          <ResFeature />
          <ResVoice />
          <ResFooter />
        </div>
      </div>
    </>
  );
};

export default Home;
