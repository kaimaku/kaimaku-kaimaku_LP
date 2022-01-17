import { NextPage } from 'next';
import FirstLook from '../components/firstLook';
import Problem from '../components/problem';
import Proposal from '../components/proposal';

const lp: NextPage = () => {
  return (
    <>
      <FirstLook />
      <Problem />
      <Proposal />
    </>
  );
};

export default lp;
