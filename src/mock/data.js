import { nanoid } from 'nanoid';

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
  paragraphOne:
    "In my four years in the tech world, I've developed a real passion for creating applications that are both functional and visually appealing. My expertise includes React.js, Meteor.js, MongoDB, TypeScript, Material-UI, and Styled-Components. I enjoy building applications that are not only effective but also intuitive and user-friendly.",
  paragraphTwo:
    "When I'm not coding, I love to travel and engage in outdoor activities like fishing, camping, and kayaking. These adventures enrich my creativity and perspective, which I bring back to my professional work.",
  paragraphThree:
    ' My key areas of expertise include: React.js, Meteor.js, MongoDB, TypeScript, Material-UI, Styled-Components, HTML, CSS, JavaScript, Git, GitHub',
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
    id: 5,
    img: 'barsmile.jpg',
    title: 'Bar Smile',
    info: 'Studio Design / Web Design / Mobile Responsive ',
    info2:
      "This is a popular nightlife spot in Okinawa, Japan. It's a pretty ideal place for a night out of drinking with some friends, or just to meet new people if you are alone!",
    url: 'https://barsmile.studio.site/english',
    repo: '',
    // if no repo, the button will not show up
  },
  {
    id: 4,
    img: 'konron.jpg',
    title: 'Konron Acupuncture',
    info: 'Wix / Web Design / Mobile Responsive ',
    info2:
      'Are you tired? Let’s treat ourselves. Konron Acupuncture is the best place to get acupuncture and moxibustion treatment in Okinawa, Japan.',
    url: 'https://www.konron-clinic.com',
    repo: '',
    // if no repo, the button will not show up
  },
  {
    id: 3,
    img: 'churasai.jpg',
    title: 'Churasai',
    info: 'Shopify / Web Design / Mobile Responsive ',
    info2:
      'Are you looking for organic lettuce? You can eat this without washing! Also, they are sweet. So kids would love to eat them.',
    url: 'https://churasai.com',
    repo: '',
    // if no repo, the button will not show up
  },
  {
    id: 2,
    img: 'github-finder.jpg',
    title: 'Github Finder',
    info: 'React.js / Redux / Web Development',
    info2: "Find GitHub users! Also, go to the users' profile page to see users’ details.",
    url: 'https://friendly-booth-cb2466.netlify.app',
    repo: 'https://github.com/asa108/github-finder',
    // if no repo, the button will not show up
  },
  {
    id: 1,
    img: 'devspace-blog.jpg',
    title: 'Devspace Blog',
    info: 'React.js / Next.js / Vercel / Tailwind CSS / Web Development / Mobile Responsive ',
    info2: 'Write blogs easily with markdown files!',
    url: 'https://devspace-blog.vercel.app',
    repo: 'https://github.com/asa108/devspace-blog',
    // if no repo, the button will not show up
  },
  {
    id: 0,
    img: '911text2.jpg',
    title: 'Text for Help 911',
    info: 'Reactjs / meteor.js / MongoDB / MUI / styled-components',
    info2:
      'The 911 Text App is designed to provide users with quick and accurate information about whether they can use text messaging to contact 911 emergency services based on their zip code.',
    info3: 'Visit my detailed blog post.',
    url: 'https://911text.meteorapp.com/',
    blogUrl:
      'https://lilybrad.medium.com/text-for-help-911-app-a-quick-way-to-check-if-you-can-text-911-98193d760d53',
    repo: '',
    // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    "If you have any request or question, don't hesitate to contact me! I'll get back within 1-2 days.",
  btn: 'Contact',
  email: 'yara.backham@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/asaneyara/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/asa108',
    },
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
