// import { nanoid } from 'nanoid';

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
  paragraphOne: 'Welcome to my portfolio.',
  paragraphTwo: "I'm Asane Yara",
  paragraphThree: 'Here is what I have done',
  paragraphFour:
    '2021年4月に、アメリカへ行く予定で、リモートで働かせていただける企業様を探しています。その他仕事の依頼もお待ちしております。',
  paragraphFive: '使用可能な言語 : HTML / CSS / Java Script / React.js / Vue.js',
  paragraphSix:
    'その他 : Github / Photoshop / illustrator / Adobe XD / 英語訳・和訳 / 英会話 / 動画編集 / SNS運用 / アパレルブランド運営(ECサイト運営)',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: 1,
    img: 'dj-events.jpg',
    title: 'DJ EVENTS',
    info: 'React.js / Next.js / contextAPI / Strapi / Cloudinary / heroku / Vercel',
    info2: '',
    url: 'https://djeventproject.vercel.app',
    repo: 'https://github.com/asa108/crown-clothing',
    // if no repo, the button will not show up
  },
  {
    id: 2,
    img: 'work1.png',
    title: 'EC site Crown Clothing',
    info: 'React.js / Redux / firebase / stripe / レスポンシブ',
    info2: '',
    url: 'https://admiring-northcutt-c8f1f2.netlify.app',
    repo: 'https://github.com/asa108/crown-clothing',
    // if no repo, the button will not show up
  },
  {
    id: 3,
    img: 'getoff.jpg',
    title: '退勤時間がわかるアプリ',
    info: 'React.js / ReactUi / レスポンシブ',
    info2: '',
    url: 'https://clever-gates-c16679.netlify.app/',
    repo: 'https://github.com/asa108/work-time',
    // if no repo, the button will not show up
  },
  {
    id: 4,
    img: 'misaki.jpg',
    title: '美崎牛 高原店',
    info: 'レスポンシブ / NoCode / 写真・動画は作成してません',
    info2: '',
    url: 'https://misakigyutakahara.studio.site',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: 5,
    img: 'churahime_logo.JPG',
    title: '美ら姫',
    info: 'レスポンシブ対応 / NoCode / 写真・動画は作成してません',
    info2: '',
    url: 'https://okinawaizakayachurahime.studio.site',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: 6,
    img: 'ryuseki.JPG',
    title: '琉成工業',
    info: 'レスポンシブ対応 / NoCode / 写真・動画は作成してません',
    info2: '',
    url: 'https://ryuseikougyo.studio.site',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: 7,
    img: 'barsmile_logo.jpg',
    title: 'Bar Smile',
    info: 'レスポンシブ対応 / NoCode / 写真・動画は作成してません',
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
