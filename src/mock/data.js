// import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Asane's portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Welcome to my site! This is Asane's portfolio", // e.g: Welcome to my website
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
  paragraphOne: 'A web developer from Okinawa Japan with 2 years of web development experience.',
  paragraphTwo:
    'I moved to the US in May 2021 right after I graduated the university. I’m currently living in South Carolina but trying to move to Florida soon!',
  paragraphThree:
    'I love spending time developing my own projects, learning new technology, and playing with my cats🐈🐈‍⬛.',
  //  paragraphFour:
  //    '2021年4月に、アメリカへ行く予定で、リモートで働かせていただける企業様を探しています。その他仕事の依頼もお待ちしております。',
  //  paragraphFive: '使用可能な言語 : HTML / CSS / Java Script / React.js / Vue.js',
  //  paragraphSix:
  //    'その他 : Github / Photoshop / illustrator / Adobe XD / 英語訳・和訳 / 英会話 / 動画編集 / SNS運用 / アパレルブランド運営(ECサイト運営)',
  // resume: 'https://drive.google.com/file/d/1ns8blNG_Nevkpi1m6vrLbr4qsfexlOcc/view?usp=sharing',
  // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: 0,
    img: 'flashcard.jpg',
    title: 'Flash card for a language learner',
    info: 'React.js / Next.js / contextAPI / Strapi / heroku / Vercel / Web Development',
    info2:
      "This is an app for people who want to learn a new language! The beta version just came out. I'm constantly adding new features!😊",
    url: 'https://flashcardfrontend.vercel.app/flashcards/sample',
    repo: 'https://github.com/asa108/flashcard-frontend',
    // if no repo, the button will not show up
  },

  {
    id: 3,
    img: 'devspace-blog.jpg',
    title: 'Devspace Blog',
    info: 'React.js / Next.js / Vercel / Tailwind CSS / Web Development / Mobile Responsive ',
    info2: 'Write blogs easily with markdown files!',
    url: 'https://devspace-blog.vercel.app',
    repo: 'https://github.com/asa108/devspace-blog',
    // if no repo, the button will not show up
  },
  {
    id: 2,
    img: 'dj-events.jpg',
    title: 'DJ EVENTS',
    info:
      'React.js / Next.js / contextAPI / Strapi / Cloudinary / heroku / Vercel / Web Development / Mobile Responsive',
    info2: 'Sign up to host events! Also, see what others are hosting.',
    url: 'https://djeventproject.vercel.app',
    repo: 'https://github.com/asa108/dj-events',
    // if no repo, the button will not show up
  },
  {
    id: 3,
    img: 'work1.png',
    title: 'Crown Clothing',
    info: 'React.js / Redux / firebase / stripe / Web Development / Mobile Responsive',
    info2:
      "You can buy hats, sneakers, jackets, women's and men’s clothes. Try checking items out with credit cards.",
    url: 'https://admiring-northcutt-c8f1f2.netlify.app/shop',
    repo: 'https://github.com/asa108/crown-clothing',
    // if no repo, the button will not show up
  },
  {
    id: 4,
    img: 'github-finder.jpg',
    title: 'Github Finder',
    info: 'React.js / Redux / Web Development',
    info2: "Find GitHub users! Also, go to the users' profile page to see users’ details.",
    url: 'https://friendly-booth-cb2466.netlify.app',
    repo: 'https://github.com/asa108/github-finder',
    // if no repo, the button will not show up
  },
  {
    id: 5,
    img: 'konron.jpg',
    title: 'Konron Acupuncture',
    info: 'Wix / Web Design / Animation / Wix Development / Mobile Responsive ',
    info2:
      'Are you tired? Let’s treat ourselves. Konron Acupuncture is the best place to get acupuncture and moxibustion treatment in Okinawa, Japan.',
    url: 'https://www.konron-clinic.com',
    repo: '',
    // if no repo, the button will not show up
  },
  {
    id: 6,
    img: 'churasai.jpg',
    title: 'Churasai',
    info: 'Shopify / Shopify Development / Mobile Responsive ',
    info2:
      'Are you looking for organic lettuce? You can eat this without washing! Also, they are sweet. So kids would love to eat them.',
    url: 'https://churasai.com',
    repo: '',
    // if no repo, the button will not show up
  },
  {
    id: 7,
    img: 'barsmile.jpg',
    title: 'Bar Smile',
    info: 'Studio Design / Web Design / Animation / StudioDesign Development / Mobile Responsive ',
    info2:
      "This is a popular nightlife spot in Okinawa, Japan. It's a pretty ideal place for a night out of drinking with some friends, or just to meet new people if you are alone!",
    url: 'https://barsmile.studio.site/english',
    repo: '',
    // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    "If you have any request or question, don't hesitate to contact me! I'll get back within 1-2 days.",
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
