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

const Home: NextPage = () => {
  return (
    <>
      <div className="">
        <div className="hidden md:block">
          <FirstLook />
          <Problem />
          <Proposal />
          <Proposal2 />
          <Features />
          <Voice />
          <Footer />
        </div>
        <div className="block md:hidden">
          <ResFirstLook />
          <ResProblem />
          <ResProposal />
        </div>
      </div>
    </>
  );
};

export default Home;
