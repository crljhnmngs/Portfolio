import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import LogoAlliance from './assets/images/Alliance.webp';
import LogoMVP from './assets/images/mvp.webp';
import UC from './assets/images/UC.png';
import portfolio from './assets/images/portfolio.png';
import dota2 from './assets/images/dota2.png';
import advanceCalulator from './assets/images/advance-calculator.png';
import calulator from './assets/images/calculator.png';
import facebook from './assets/images/facebook.png';
import fakeStore from './assets/images/fake-store.png';
import WeLift from './assets/images/WeLift.png';
import OverFlow from './assets/images/Overflow.png';
import  Amusement from './assets/images/amusement.gif';

const iconStyleClass: string = 'hover:scale-[1.18] size-full';

export const sections = [
    {
        name: 'Home',
        id: '/',
    },
    {
        name: 'About',
        id: 'about',
    },
    {
        name: 'Skills',
        id: 'skills',
    },
    {
        name: 'Timeline',
        id: 'timeline',
    },
    {
        name: 'Projects',
        id: 'projects',
    },
    {
        name: 'Contact',
        id: 'contact',
    },
];

export const skills = [
    {
        name: 'TypeScript',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    },
    {
        name: 'JavaScript',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    },
    {
        name: 'VBScript',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/visualbasic/visualbasic-original.svg',
    },
    {
        name: 'HTML',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    },
    {
        name: 'CSS',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    },
    {
        name: 'Bootstrap',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg',
    },
    {
        name: 'Sass',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    },
    {
        name: 'Tailwind CSS',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
        name: 'Material UI',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
    },
    {
        name: 'React',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    },
    // {
    //     name: 'Redux',
    //     link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    // },
    {
        name: 'MobX',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mobx/mobx-original.svg',
    },
    {
        name: 'NodeJS',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    },
    {
        name: 'C++',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
    },
    {
        name: 'Java',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg',
    },
    {
        name: 'Spring Boot',
        link: 'https://spring.io/img/projects/spring-boot.svg',
    },
    {
        name: 'C#',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
    },
    {
        name: 'ASP.NET Core',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg',
    },
    {
        name: 'PHP',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
    },
    {
        name: 'Python',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    },
    {
        name: 'MySQl',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    },
    {
        name: 'Git',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    },
    {
        name: 'SVN',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/subversion/subversion-original.svg',
    },
];

export const socials = [
    {
        name: 'github',
        link: 'https://github.com/crljhnmngs',
        icon: <FaGithub className={iconStyleClass} />,
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/crljhnmngs/',
        icon: <FaLinkedin className={iconStyleClass} />,
    },
    {
        name: 'facebook',
        link: 'https://www.facebook.com/crljhnmngs',
        icon: <FaFacebook className={iconStyleClass} />,
    },
    {
        name: 'instagram',
        link: 'https://instagram.com/crljhnmngs',
        icon: <FaInstagram className={iconStyleClass} />,
    },
    {
        name: 'twitter',
        link: 'https://twitter.com/crljhnmngs',
        icon: <FaSquareXTwitter className={iconStyleClass} />,
    },
];

export const experiences = [
    {
        logo: LogoAlliance,
        role: 'Software Engineer',
        title: 'Alliance Software Inc.',
        description:
            'Software Engineer at Alliance Software Inc, a global IT services and solutions company. Alliance was established in 2000 and has since grown to become one of the Philippines largest and most respected independent software development outsourcing company.',
        link: 'https://alliance.com.ph/',
        tech: [
            'React',
            'TypeScript',
            'ASP.net Core',
            'C++',
            'VBScript',
            'JavaScript',
            'Waterfall',
        ],

        date: 'October 2022 - Present',
        subItems: [
            {
                position: 'Technical Specialist II',
                setup: 'On-site',
                projects: [
                    {
                        description: `Developing a web UI cardless transaction for our Japanese client's ATMs here in the Philippines. Bank: BDO`,
                        tech: [
                            'C++',
                            'VBScript',
                            'HTML',
                            'JavaScript',
                            'C#',
                            'SVN',
                            'Waterfall',
                        ],
                    },
                ],
                date: 'January 2024 - Present',
            },
            {
                position: 'Technical Specialist I',
                setup: 'On-site',
                projects: [
                    {
                        description:
                            'Developed a full-stack web application for one of our clients in the Philippines.',
                        tech: [
                            'React',
                            'TypeScript',
                            'MobX',
                            'Material UI',
                            'ASP.net Core',
                        ],
                    },
                    {
                        description:
                            'Developed a demo ATM web service for our Japanese client to showcase their new ATM application to their clients.',
                        tech: ['JavaScript', 'HTML', 'Bootstrap + Sass', 'C#'],
                    },
                    {
                        description: `I was assigned to provide bank support for our Japanese client's ATMs here in the Philippines. My tasks include fixing bugs in their legacy base code and developing new functionalities based on specific bank requests. Banks: BDO, MBTC, and EWB`,
                        tech: ['C++', 'VBScript', 'SVN', 'Waterfall'],
                    },
                ],
                date: 'October 2022 - January 2024',
            },
        ],
    },
    {
        logo: LogoMVP,
        title: 'MVP.dev',
        role: 'Software QA (Intern)',
        link: 'https://mvp.dev/',
        description:
            'Software QA Intern at MVP.dev, MVP.dev help business owners harness the power of no-code technology to bring their vision to life in weeks through a high-touch proven process.',
        tech: [
            'Test Plan',
            'Test Cases',
            'Integration tests',
            'Functional tests',
        ],
        date: 'March 2022 - June 2022',
    },
];

export const educations = [
    {
        logo: UC,
        school: 'University Of Cebu - Lapu-Lapu and Mandaue',
        track: 'College',
        course: 'Bachelor of Science in Information Technology',
        tech: [
            'C++',
            'Java',
            'C#',
            'Spring Boot',
            'J2EE',
            'NodeJS',
            'Python',
            'MySQL',
            'PHP',
            'Agile',
        ],
        date: 'June 2018 - July 2022',
    },
    {
        logo: UC,
        school: 'University Of Cebu - Lapu-Lapu and Mandaue',
        track: 'Senior High School',
        course: 'TECH-VOC ICT - Computer Programming & Hardware Servicing ',
        tech: ['Java', 'C#'],
        date: 'June 2016 - April 2018',
    },
];
export const projects = [
    {
        name: 'Personal Portfolio',
        image: portfolio,
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odio quisquam repellendus voluptatibus animi ducimus, corrupti et autem quis, harum quia quas, deserunt quae omnis inventore vero! Ducimus, odio sint.',
        tech: [
            'React',
            'TypeScript',
            'Tailwind',
            'Framer Motion',
            'Responsive ',
        ],
        date: '2024',
        links: {
            github: 'https://github.com/crljhnmngs/Portfolio',
            live: '',
        },
    },
    {
        name: 'Fake Store',
        image: fakeStore,
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odio quisquam repellendus voluptatibus animi ducimus, corrupti et autem quis, harum quia quas, deserunt quae omnis inventore vero! Ducimus, odio sint.',
        tech: ['HTML', 'SCSS', 'JavaScript', 'Responsive'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/Fake-Store',
            live: 'https://fake-store-blond.vercel.app/',
        },
    },
    {
        name: 'DOTA2 Heroes',
        image: dota2,
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odio quisquam repellendus voluptatibus animi ducimus, corrupti et autem quis, harum quia quas, deserunt quae omnis inventore vero! Ducimus, odio sint.',
        tech: ['HTML', 'Tailwind', 'JavaScript', 'Responsive'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/DOTA2-Heroes',
            live: 'https://crljhnmngs.github.io/DOTA2-Heroes/',
        },
    },
    {
        name: 'Welift',
        image: WeLift,
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odio quisquam repellendus voluptatibus animi ducimus, corrupti et autem quis, harum quia quas, deserunt quae omnis inventore vero! Ducimus, odio sint.',
        tech: ['PHP', 'MySQL', 'jQuery', 'JavaScript'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/CAPSTONE-PROJECT',
            live: '',
        },
    },
    {
        name: 'Overflow',
        image: OverFlow,
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odio quisquam repellendus voluptatibus animi ducimus, corrupti et autem quis, harum quia quas, deserunt quae omnis inventore vero! Ducimus, odio sint.',
        tech: ['PHP', 'MySQL', 'jQuery', 'JavaScript'],
        date: '2022',
        links: {
            github: 'https://github.com/LMNTRIXXXX/Capstone',
            live: '',
        },
    },
    {
        name: 'Advance Calculator',
        image: advanceCalulator,
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odio quisquam repellendus voluptatibus animi ducimus, corrupti et autem quis, harum quia quas, deserunt quae omnis inventore vero! Ducimus, odio sint.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/Advance-Calculator',
            live: 'https://advance-calculator-three.vercel.app/',
        },
    },
    {
        name: 'Basic Calculator',
        image: calulator,
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odio quisquam repellendus voluptatibus animi ducimus, corrupti et autem quis, harum quia quas, deserunt quae omnis inventore vero! Ducimus, odio sint.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/Calculator',
            live: 'https://calculator-kohl-xi-82.vercel.app/',
        },
    },
    {
        name: 'Facebook Clone(Design)',
        image: facebook,
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odio quisquam repellendus voluptatibus animi ducimus, corrupti et autem quis, harum quia quas, deserunt quae omnis inventore vero! Ducimus, odio sint.',
        tech: ['HTML', 'CSS'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/Facebook-Clone',
            live: 'https://facebook-clone-chi-orcin.vercel.app/',
        },
    },
    {
        name: ' Amusement Park Management System',
        image: Amusement,
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima odio quisquam repellendus voluptatibus animi ducimus, corrupti et autem quis, harum quia quas, deserunt quae omnis inventore vero! Ducimus, odio sint.',
        tech: ['C#', 'Windows Forms'],
        date: '2019',
        links: {
            github: 'https://github.com/crljhnmngs/Amusement-Park-Management-System',
            live: '',
        },
    },
];
