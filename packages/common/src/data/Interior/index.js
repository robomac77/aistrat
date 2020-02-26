/* interiro dummy data list :-
- Navbar
- Banner
- Feature
- About
- Projects
- Team
- News
- Testimonial
- Gallery
- Newsletter
- Footer
  - menu widget
  - copyright
  - social links
*/
/* ------------------------------------ */
// Menu data
/* ------------------------------------ */
export const menuData = [
  {
    label: 'Feature',
    path: '#feature',
    offset: '80',
  },
  {
    label: 'About',
    path: '#aboutUs',
    offset: '80',
  },
  {
    label: 'Content',
    path: '#project',
    offset: '80',
  },
  {
    label: 'Team',
    path: '#team',
    offset: '80',
  },
  {
    label: 'News',
    path: '#news',
    offset: '40',
  },
  {
    label: 'Testimonial',
    path: '#testimonial',
    offset: '80',
  },
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import slide1 from 'common/src/assets/image/interior/slider/slide-1.png';
import slide2 from 'common/src/assets/image/interior/slider/slide-2.png';
import slide3 from 'common/src/assets/image/interior/slider/slide-3.png';

export const bannerData = {
  discount: '25%',
  discountLabel: 'DISCOUNT ON YOUR FIRST DESIGN',
  title: 'The future of money',
  text:
    'We at Terahash Digital believe the birth of the internet brought an unprecedented level of innovative disruption everywhere except money Terahash Digital is a research oriented multi strategy alpha hedge fund ', 
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      title: 'Unconfiscatable',
      link: '#1',
    },
    {
      id: 2,
      thumb_url: slide2,
      title: 'Decentralized',
      link: '#1',
    },
    {
      id: 3,
      thumb_url: slide3,
      title: 'Pseudo-Anonymous',
      link: '#1',
    },
  ],
};

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */
import corporateIcon from 'common/src/assets/image/interior/feature/1.svg';
import landscapeIcon from 'common/src/assets/image/interior/feature/2.svg';
import interiorIcon from 'common/src/assets/image/interior/feature/3.svg';

export const featureData = {
  title: 'Fund Offerings',
  slogan: 'Types Of Funds We Provide',
  features: [
    {
      id: 1,
      icon: corporateIcon,
      title: 'Digital Assets Fund',
      description:
        'Research structured, multi strategy hedge fund designed to achieve alpha',
    },
    {
      id: 2,
      icon: landscapeIcon,
      title: 'ICO Fund',
      description:
        'Offers exposure to very early stage public blockchain token sale projects',
    },
    {
      id: 3,
      icon: interiorIcon,
      title: 'Venture Fund',
      description:
        'Invests in early-late growth companies leveraging blockchain',
    },
  ],
};

/* ------------------------------------ */
// About section data
/* ------------------------------------ */
import parentImg from 'common/src/assets/image/interior/about_parent.png';

export const aboutData = {
  thumb_url: parentImg,
  title: 'About Terahash Digital',
  text:
    'Founded in 2020 , Terahash Digital is a British Virgin Islands based Bitcoin investment hedge fund. Our core mission is to spread the adoption and innovation of cryptocurrencies. ',
  text2:
    ' Within the next several years, we envision blockchains and digital currencies having an established, responsibly managed, and regulated role in the global economy, soon after disintermediating a myriad of industries.',
};

/* ------------------------------------ */
// Projects section data
/* ------------------------------------ */
import project1 from 'common/src/assets/image/interior/projects/1.png';

export const projectData = {
  title: 'Content',
  slogan: 'Read more about our research in such cases',
  thumb_url: project1,
  projects: [
    {
      id: 1,
      text:
        'The invention of Bitcoin fundamentally redefined our understanding of money. It’s the first digital form of store of value.  Throughout history, many items have played the role of money with varying degrees of success. Chances of success mainly came down to these factors: portability , durability, divisibility and most importantly longevity based scarcity. Off all the things considered money in our increasingly native digital world today, Bitcoin fulfills all these properties remarkably well',
      text2:
        'When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.',
    },
    {
      id: 2,
      text:
        'Schedule a brainstorming session in a quiet place with few distractions. If you are working on a project alone, you can use group discussions with friends or colleagues to gain a new perspective on the topic. When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.',
      text2:
        'Completing a successful project requires a significant amount of time and work, which means evaluating your priorities and planning your course of action.',
    },
    {
      id: 3,
      text:
        'Create a mind map to brainstorm your project to inspire new ideas. Use a simple piece of paper, poster, or whiteboard for your mind map and we write the destination of your project in the middle.We  Write down related topics, subtopics, and relevant concepts around the goal and branch from them to create and follow different tangents.',
      text2:
        'When you conduct a group project, each group member can benefit from the ideas of others and gain new insights by brainstorming together.',
    },
  ],
};

/* ------------------------------------ */
// Team section data
/* ------------------------------------ */
import { Icon } from 'react-icons-kit';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbble } from 'react-icons-kit/ionicons/socialDribbble';
import { socialGoogleplus } from 'react-icons-kit/ionicons/socialGoogleplus';
import { socialSkype } from 'react-icons-kit/ionicons/socialSkype';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';

import member1 from 'common/src/assets/image/interior/team/member1.jpg';
import member2 from 'common/src/assets/image/interior/team/member2.jpg';
import member3 from 'common/src/assets/image/interior/team/member3.jpg';

export const teamData = {
  title: 'MEET THE TEAM',
  slogan: 'Meet Our Perfectionist',
  members: [
    {
      id: 1,
      avatar: member1,
      name: 'Roman Ul Oman',
      designation: 'Project Manager',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 2,
      avatar: member2,
      name: 'Jeny Doe',
      designation: 'Lead Designer',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 3,
      avatar: member3,
      name: 'Naina Cooper',
      designation: 'Marketing Manager',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// News section data
/* ------------------------------------ */
export const newsData = [
  {
    id: 1,
    title: 'According to Bloomberg, Bitcoin is asserting itself as a hedge against global macro economic uncertainty.',
    excerpt:
      'During global events like the US-China trade war 2019, deliberate weakening of the Chinese Yuan, US Iran missile strike ,and the outbreak of nCov all saw upside movement in the price of the first born digital asset  ',
    link_text: 'Read',
    link_url: '#',
  },
  {
    id: 2,
    title: 'Learn more about landscape plans, how to design them.',
    excerpt:
      'Learn more about landscape plans, how to design them, what to watch out for in your layout. We deign the appropriate layout for our clients to deliver best',
    link_text: 'Read',
    link_url: '#',
  },
  {
    id: 3,
    title: 'Discover our design ideas, beautiful photos for interior design.',
    excerpt:
      'Discover our design ideas, beautiful photos and how-to projects to create Interior Design. We try to reflect your personality on our design',
    link_text: 'Read',
    link_url: '#',
  },
  {
    id: 4,
    title: 'Interior design is an art and we are trying to paint monalisa.',
    excerpt:
      'With the best players in the designing sector, we explore a whole new world of interior design.Our approach corporate design is extraordinary',
    link_text: 'Read',
    link_url: '#',
  },
];

/* ------------------------------------ */
// Testimonial data
/* ------------------------------------ */
export const testimonialData = {
  title: 'TESTIMONIAL',
  slogan: 'What Our Clients Say',
  reviews: [
    {
      id: 0,
      name: 'Parker Joe',
      designation: 'Co-Founder & CEO',
      username: '@amader craft',
      account_url: '#',
      comment:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg',
    },
    {
      id: 1,
      name: 'Britney havana',
      designation: 'Co-Founder & CEO',
      username: '@Light’s craft',
      account_url: '#',
      comment:
        'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    },
    {
      id: 2,
      name: 'June Spears',
      designation: 'Co-Founder & CEO',
      username: '@Eagle’s craft',
      account_url: '#',
      comment:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Jessica Parker',
      designation: 'Co-Founder & CEO',
      username: '@Earth’s craft',
      account_url: '#',
      comment:
        'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work !',
      avatar:
        'https://pbs.twimg.com/profile_images/1049383024306081792/cQkGbpRO.jpg',
    },
    {
      id: 4,
      name: 'Django Dsuja',
      designation: 'Co-Founder & CEO',
      username: '@Moon’s craft',
      account_url: '#',
      comment:
        'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
    },
  ],
};

/* ------------------------------------ */
// Gallery data
/* ------------------------------------ */
import galleryImg1 from 'common/src/assets/image/interior/gallery/1.jpg';
import galleryImg2 from 'common/src/assets/image/interior/gallery/2.jpg';
import galleryImg3 from 'common/src/assets/image/interior/gallery/3.jpg';
import galleryImg4 from 'common/src/assets/image/interior/gallery/4.jpg';
import galleryImg5 from 'common/src/assets/image/interior/gallery/5.jpg';

export const galleryData = [
  {
    id: 1,
    thumb_url: galleryImg1,
    name: 'Eco friendly',
    link: '#',
  },
  {
    id: 2,
    thumb_url: galleryImg2,
    name: 'Living',
    link: '#',
  },
  {
    id: 3,
    thumb_url: galleryImg3,
    name: 'Corner',
    link: '#',
  },
  {
    id: 4,
    thumb_url: galleryImg4,
    name: 'Wall decor',
    link: '#',
  },
  {
    id: 5,
    thumb_url: galleryImg5,
    name: 'Restroom',
    link: '#',
  },
];

/* ------------------------------------ */
// Newsletter data
/* ------------------------------------ */
export const newsletterData = {
  title: 'SUBSCRIBE NEWSLETTER',
  slogan: 'Don’t Miss Out Any Offer',
  note:
    'Note: Please call us at 12pm to 8am. otherwise our customer supporter will not available to reach your call, but you can drop mail anytime.',
};

/* ------------------------------------ */
// Footer data
/* ------------------------------------ */
import { facebook } from 'react-icons-kit/fa/facebook';
import { dribbble } from 'react-icons-kit/fa/dribbble';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';
import { skype } from 'react-icons-kit/fa/skype';
import { twitter } from 'react-icons-kit/fa/twitter';
import logo from 'common/src/assets/image/interior/logo.svg';

export const footerData = {
  logo: logo,
  mail: 'hello@redq.io',
  phone: '123-456-7890',
  socialLinks: [
    {
      id: 1,
      icon: <Icon icon={facebook} />,
      name: 'facebook',
      link: '#',
    },
    {
      id: 2,
      icon: <Icon icon={dribbble} />,
      name: 'dribbble',
      link: '#',
    },
    {
      id: 3,
      icon: <Icon icon={googlePlus} />,
      name: 'googlePlus',
      link: '#',
    },
    {
      id: 4,
      icon: <Icon icon={skype} />,
      name: 'skype',
      link: '#',
    },
    {
      id: 5,
      icon: <Icon icon={twitter} />,
      name: 'twitter',
      link: '#',
    },
  ],
  menuWidgets: [
    {
      id: 1,
      title: 'ABOUT US',
      menu: [
        {
          id: 1,
          text: 'Support Center',
          link: '#',
        },
        {
          id: 2,
          text: 'Customer Support',
          link: '#',
        },
        {
          id: 3,
          text: 'About Us',
          link: '#',
        },
        {
          id: 4,
          text: 'Copyright',
          link: '#',
        },
        {
          id: 5,
          text: 'Popular Campaign',
          link: '#',
        },
      ],
    },
    {
      id: 2,
      title: 'OUR INFORMATION',
      menu: [
        {
          id: 1,
          text: 'Return Policy',
          link: '#',
        },
        {
          id: 2,
          text: 'Privacy Policy',
          link: '#',
        },
        {
          id: 3,
          text: 'Terms & Conditions',
          link: '#',
        },
        {
          id: 4,
          text: 'Site Map',
          link: '#',
        },
        {
          id: 5,
          text: 'Store Hours',
          link: '#',
        },
      ],
    },
    {
      id: 3,
      title: 'MY ACCOUNT',
      menu: [
        {
          id: 1,
          text: 'Press inquiries',
          link: '#',
        },
        {
          id: 2,
          text: 'Social media directories',
          link: '#',
        },
        {
          id: 3,
          text: 'Images & B-roll',
          link: '#',
        },
        {
          id: 4,
          text: 'Permissions',
          link: '#',
        },
        {
          id: 5,
          text: 'Speaker requests',
          link: '#',
        },
      ],
    },
    {
      id: 4,
      title: 'POLICY',
      menu: [
        {
          id: 1,
          text: 'Application security',
          link: '#',
        },
        {
          id: 2,
          text: 'Software principles',
          link: '#',
        },
        {
          id: 3,
          text: 'Unwanted software policy',
          link: '#',
        },
        {
          id: 4,
          text: 'Responsible supply chain',
          link: '#',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// social profile
/* ------------------------------------ */
export const socialProfile = [
  {
    id: 1,
    icon: 'flaticon-facebook-logo',
    link: '#',
  },
  {
    id: 2,
    icon: 'flaticon-twitter-logo-silhouette',
    link: '#',
  },
  {
    id: 3,
    icon: 'flaticon-instagram',
    link: '#',
  },
  {
    id: 4,
    icon: 'flaticon-tumblr-logo',
    link: '#',
  },
  {
    id: 5,
    icon: 'flaticon-dribble-logo',
    link: '#',
  },
];
