import { NextPage } from 'next';

import VoiceCard from './voiceCard';
import Title from '../../../public/images/voice/voiceTitle.png';

const Voice: NextPage = () => {
  return (
    <>
      <div className="flex flex-col mb-24 w-full">
        <div className="w-fit mx-auto px-auto">
          <img src={Title.src} alt="TITLE" />
        </div>
        <p className="text-center text-[30px] font-semibold tracking-widest pt-4 mb-[88px]">
          長期インターン経験談
        </p>
        <div className="w-full px-auto">
          <div className="flex flex-row gap-6 mx-12 xl:mx-40">
            <VoiceCard
              title1="一歩踏み出せたからこそ"
              title2="新しい自分へ"
              content="入学して1年が経ったころ、バイトや学業も慣れてきて漠然と「何かをがんばりたい」と考えるようになっていました。そんな時、先輩から長期インターンの話を聞きました。やってみたいと思うと共に、自分に出来るんだろうかといった不安もありましたが、その先輩に背中を押されて勇気を出して取り組んでみました。始めてみてからは、就職や働く事に対してのイメージが持てるようになっていきました。"
              scholar="大学3年 女性"
              writer="営業・1年長期インターンシップ"
            />
            <VoiceCard
              title1="環境が変わることで"
              title2="価値観や行動も変わる"
              content="昨年の夏からwebメディアでマーケターとして長期インターンをしています。職場の雰囲気は非常によく、楽しみつつもそれぞれがストイックに業務に取り組んでいます。僕自身も、マーケターとしてのスキルの向上はもちろん、とても優秀な仲間との出会いを通じて自分の価値観が変わっていっている事を感じています。大学生の内から責任のある仕事に取り組む事ができるため、貴重な経験をさせてもらっています。"
              scholar="大学2年 男性"
              writer="マーケター・10ヵ月長期インターンシップ"
            />
            <VoiceCard
              title1="経営者や優秀な社員と"
              title2="働くことで達成できた成長"
              content="長期インターンシップを行う前は自分の強みがなく、就活において不安であったが、本気で仕事をしている大人の環境に踏み入れたことで成長することができたと思う。経営者や優秀なビジネスパーソンと仕事をすることで速いスピードで成長できる環境は、長期インターンシップでなければ学生のうちにはなかなか手に入らないと感じました。"
              scholar="大学3年 男性"
              writer="営業・6ヵ月長期インターンシップ"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Voice;
