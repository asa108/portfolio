import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'portfolio.jpg',
  paragraphOne:
    '沖縄生まれ沖縄育ちの屋良 朝音です。琉球大学の4年次で経済学を学んでいます。米軍アメリカ人の旦那と結婚し、世界中どこにいても働けるスキル身につけたくてプログラミングをはじめました。',
  paragraphTwo:
    'プログラミングスクールで基礎を学習後、2019年12月からインターン生としてVR・ARを用いたwebサービス開発会社で働きはじめてちょうど１年が経ちました。現在も働かせて頂いてます。',
  paragraphThree:
    '仕事内容は、サイトのスタイル修正、React.js または Vue.jsを利用したwebサービスのバグ修正・スタイル修正、インスタグラム運用、機械学習になります。',
  paragraphFour:
    '2021年4月に、アメリカへ行く予定で、リモートで働かせていただける企業様を探しています。その他仕事の依頼もお待ちしております。',
  paragraphFive: '使用可能な言語 : HTML / CSS / Java Script / React.js / Vue.js',
  paragraphSix:
    'その他 : Github / Photoshop / illustrator / 動画編集 / 英語訳・和訳 / 英会話 / SNS運用 / アパレルブランド運営',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'misaki.jpg',
    title: '美崎牛 高原店',
    info: '',
    info2: '',
    url: 'https://misakigyutakahara.studio.site',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'churahime_logo.JPG',
    title: '美ら姫',
    info: '',
    info2: '',
    url: 'https://okinawaizakayachurahime.studio.site',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ryuseki.JPG',
    title: '琉成工業',
    info: '',
    info2: '',
    url: 'https://ryuseikougyo.studio.site',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'barsmile_logo.jpeg',
    title: 'Bar Smile',
    info: '',
    info2: '',
    url: 'https://barsmile.studio.site',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'yaradayo317@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'instagram',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
