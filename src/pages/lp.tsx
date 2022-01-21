import { NextPage } from 'next';
import Features from '../components/features/features';
import FirstLook from '../components/firstLook';
import Problem from '../components/problem';
import Proposal from '../components/proposal';
import Proposal2 from '../components/proposal2';
import Voice from '../components/voice/voice';
import Footer from '../components/footer';

const lp: NextPage = () => {
  return (
    <>
      <FirstLook />
      <Problem />
      <Proposal />
      <Proposal2 />
      <Features />
      <Voice />
      <Footer />
    </>
  );
};

export default lp;
