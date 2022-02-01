import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  const url = 'https://kaimaku-user.web.app/';

  return (
    <Html lang="ja-JP">
      <Head>
        {/* Change the contents of `<Head>` as needed. */}
        <title>Kaimaku | 長期インターンのマッチングアプリ</title>
        <meta
          name="description"
          content="kaimakuは初めての長期インターンを探す人向けのマッチングアプリです。毎日おすすめされる求人を学生は選ぶだけ。"
        />
        <meta name="theme-color" content="#333" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kaimaku | 長期インターンのマッチングアプリ" />
        <meta property="og:url" content="https://kaimaku-user.web.app/" />
        <meta
          property="og:description"
          content="kaimakuは初めての長期インターンを探す人向けのマッチングアプリです。毎日おすすめされる求人を学生は選ぶだけ。"
        />
        <meta property="og:site_name" content="長期インターンを探すためのマッチングアプリKaimaku" />
        <meta property="og:image" content="https://kaimaku-user.web.app//ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
