import BlogImage1 from '../../assets/image/agency/blog/blog-img1.png';
import BlogImage2 from '../../assets/image/agency/blog/blog-img2.png';
import BlogImage3 from '../../assets/image/agency/blog/blog-img3.png';
import Member1 from '../../assets/image/agency/team/member-1.jpg';
import Member2 from '../../assets/image/agency/team/member-2.jpg';
import Member3 from '../../assets/image/agency/team/member-3.jpg';
import Denny from '../../assets/image/agency/client/denny.png';
import Menny from '../../assets/image/agency/client/menny.png';

const data = {
  menuItems: [
    {
      label: 'Products',
      path: '#featureSection',
      offset: '80',
    },
    {
      label: 'Community',
      path: '#workHistorySection',
      offset: '100',
    },
    {
      label: 'Resources',
      path: '#blogSection',
      offset: '100',
    },
    {
      label: 'Solutions',
      path: '#qualitySection',
      offset: '100',
    },
    {
      label: 'Partners',
      path: '#testimonialSection',
      offset: '100',
    },
    {
      label: 'Company',
      path: '#teamSection',
      offset: '67',
    },
    {
      label: 'FAQ',
      path: '#faqSection',
      offset: '100',
    },
  ],
  aboutus: [
    {
      id: 1,
      title: 'Evidence backed research',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Enable firms to get and stay ahead with AI and ML',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Ai Cloud Solutions.',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: 'Data analytics across all industries and use cases',
      icon: 'flaticon-next',
    },
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Predictive Analytics Engine',
      description:
        'Identify certain red flags that precede business disruptions e.g downtime',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Telco CEM',
      description:
        'Operational intelligence through machine learning at scale and in real time.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'AI Ad Designer',
      description:
        'Deploy AB Testing for Ads to optimize marketing results ',
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      title: 'Customer Seg & Churn Rate Analysis Platform',
      description:
        'Automatically identify changes in service quality to reduce churn and increase ARPU',
    },
    {
      id: 5,
      icon: 'flaticon-briefing',
      title: 'Business Analysis & Market Research Lab',
      description:
        'A day to day report about your ongoing business for proper understanding',
    },
    {
      id: 6,
      icon: 'flaticon-creative',
      title: 'MLOps Platform',
      description:
        'We create ML data pipelines to enable real time learning and inference',
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Advanced Data Analytics',
      description:
        ' Demand forecasting , customer modeling, price elasticity analysis',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Bus. Intel. Visualization',
      description:
        'Leverage Linear and Logistic Regression to predict buying behaviours of customers.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'AI Technology Integration',
      description:
        'Set up AI and ML pipelines for continuous analytics.',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Data Management',
      description:
        'Data cleansing and preparation for machine learning deployment .',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Real home corporation',
      thumbnail_url: BlogImage1,
      date: 'November 02, 2018',
      postLink: '#1',
    },
    {
      id: 2,
      title: 'Sheltech developer ltd.',
      thumbnail_url: BlogImage2,
      date: 'November 12, 2018',
      postLink: '#2',
    },
    {
      id: 3,
      title: 'Alt architecture co.',
      thumbnail_url: BlogImage3,
      date: 'December 09, 2018',
      postLink: '#3',
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Gerald Mac Otabil',
      thumbnail_url: Member1,
      designation: 'Co Founder & Chief ML Engineer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 2,
      name: 'Jason Wu',
      thumbnail_url: Member2,
      designation: 'Sr ML Engineer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 3,
      name: 'Kevin Ma',
      thumbnail_url: Member3,
      designation: 'Data Scientist',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: 'Ella Li',
      designation: 'CEO of CNACC Shanghai.',
      comment:
        'Best working experience  with this amazing team & in future, we want to work together',
      avatar_url: Denny,
    },
    {
      id: 2,
      name: 'Mac Deng',
      designation: 'Co-founder of Hong Kong Marketing Agency',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
    {
      id: 3,
      name: 'Lilya Song',
      designation: 'Director of Marketing at InMobi Inc',
      comment:
        'Our work with Aistrat to design ML models to find fraudulent traffic was a huge success',
      avatar_url: Denny,
    },
    {
      id: 4,
      name: 'David Mansour',
      designation: 'Co-founder of QuantMasters',
      comment:
        'AiStrat ML models drastically improved our trading strategies, increasing our margin by 38%',
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'How to contact with Customer Service?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
    },
    {
      id: 2,
      title: 'App installation failed, how to update system information?',
      description:
        'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
    },
    {
      id: 3,
      title: 'Website reponse taking time, how to improve?',
      description:
        'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
    },
    {
      id: 4,
      title: 'New update fixed all bug and issues?',
      description:
        'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: 'About Us',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Support Center',
        },
        {
          id: 2,
          url: '#2',
          text: 'Customer Support',
        },
        {
          id: 3,
          url: '#3',
          text: 'About Us',
        },
        {
          id: 4,
          url: '#4',
          text: 'Copyright',
        },
        {
          id: 5,
          url: '#5',
          text: 'Popular Campaign',
        },
      ],
    },
    {
      id: 2,
      title: 'Our Information',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Return Policy',
        },
        {
          id: 2,
          url: '#2',
          text: 'Privacy Policy',
        },
        {
          id: 3,
          url: '#2',
          text: 'Terms & Conditions',
        },
        {
          id: 4,
          url: '#4',
          text: 'Site Map',
        },
        {
          id: 5,
          url: '#5',
          text: 'Store Hours',
        },
      ],
    },
    {
      id: 3,
      title: 'My Account',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Press inquiries',
        },
        {
          id: 2,
          url: '#2',
          text: 'Social media directories',
        },
        {
          id: 3,
          url: '#3',
          text: 'Images & B-roll',
        },
        {
          id: 4,
          url: '#4',
          text: 'Permissions',
        },
        {
          id: 5,
          url: '#5',
          text: 'Speaker requests',
        },
      ],
    },
    {
      id: 4,
      title: 'Policy',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Application security',
        },
        {
          id: 2,
          url: '#2',
          text: 'Software principles',
        },
        {
          id: 3,
          url: '#3',
          text: 'Unwanted software policy',
        },
        {
          id: 4,
          url: '#4',
          text: 'Responsible supply chain',
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1',
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2',
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3',
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4',
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5',
    },
  ],
};
export default data;
