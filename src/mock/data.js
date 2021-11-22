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
  paragraphOne:
    "I'm a Web Developer & Creative Lead from Okinawa Japan. I'm currentley living in Columbia South Carolina and working BrandBuddyz LLC which located in Japan.",
  paragraphTwo: 'In my spare time I like building my own products. ',
  paragraphThree: 'Love my cats and going travel.',
  //  paragraphFour:
  //    '2021年4月に、アメリカへ行く予定で、リモートで働かせていただける企業様を探しています。その他仕事の依頼もお待ちしております。',
  //  paragraphFive: '使用可能な言語 : HTML / CSS / Java Script / React.js / Vue.js',
  //  paragraphSix:
  //    'その他 : Github / Photoshop / illustrator / Adobe XD / 英語訳・和訳 / 英会話 / 動画編集 / SNS運用 / アパレルブランド運営(ECサイト運営)',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: 1,
    img: 'dj-events.jpg',
    title: 'DJ EVENTS',
    info:
      'React.js / Next.js / contextAPI / Strapi / Cloudinary / heroku / Vercel/ Web Development',
    info2: '',
    url: 'https://djeventproject.vercel.app',
    repo: 'https://github.com/asa108/dj-events',
    // if no repo, the button will not show up
  },
  {
    id: 2,
    img: 'work1.png',
    title: 'EC site Crown Clothing',
    info: 'React.js / Redux / firebase / stripe / Responsive / Web Development',
    info2: '',
    url: 'https://admiring-northcutt-c8f1f2.netlify.app',
    repo: 'https://github.com/asa108/crown-clothing',
    // if no repo, the button will not show up
  },
  {
    id: 3,
    img: 'github-finder.jpg',
    title: 'Github Finder',
    info: 'React.js / Redux / Web Development',
    info2: '',
    url: 'https://friendly-booth-cb2466.netlify.app',
    repo: 'https://github.com/asa108/github-finder',
    // if no repo, the button will not show up
  },
  {
    id: 4,
    img: 'konron.jpg',
    title: 'Konron Acupuncture',
    info: 'Wix / Web Design / Responsive / Animation / Web Development',
    info2: '',
    url: 'https://www.konron-clinic.com',
    repo: '',
    // if no repo, the button will not show up
  },
  {
    id: 5,
    img: 'churasai.jpg',
    title: 'Churasai',
    info: 'Shopify / Responsive / Web Development',
    info2: '',
    url: 'https://churasai.com',
    repo: '',
    // if no repo, the button will not show up
  },
  {
    id: 6,
    img: 'barsmile.jpg',
    title: 'Konron Acupuncture',
    info: 'Studio Design / Web Design / Responsive / Animation / Web Development',
    info2: '',
    url: 'https://barsmile.studio.site',
    repo: '',
    // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "If you have request or question, don't hesitate to contact! I'll get back within 1-2 days.",
  btn: 'Contact',
  email: 'asanebradley@gmail.com',
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
