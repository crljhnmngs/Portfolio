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
import Amusement from './assets/images/amusement.gif';

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
            'Git',
            'Waterfall',
        ],

        date: 'October 2022 - Present',
        subItems: [
            {
                position: 'Associate Technical Specialist I',
                setup: 'On-site',
                projects: [
                    {
                        description:
                            "Developing a web UI cardless cash withdrawal and cash deposit transactions for our Japanese client's ATMs here in the Philippines. The user can use a QR code, fingerprint, or face recognition to do cash withdrawals and deposits. Bank: BDO",
                        tech: [
                            'C++',
                            'VBScript',
                            'JavaScript',
                            'HTML',
                            'CSS',
                            'C#',
                            'Git',
                            'SVN',
                            'Waterfall',
                        ],
                    },
                ],
                date: 'July 2024 - Present',
            },
            {
                position: 'Technical Specialist II',
                setup: 'On-site',
                projects: [
                    {
                        description: `Developed a web UI cardless cheque deposit transaction for our Japanese client's ATMs here in the Philippines. Bank: BDO`,
                        tech: [
                            'C++',
                            'VBScript',
                            'JavaScript',
                            'HTML',
                            'CSS',
                            'C#',
                            'Git',
                            'SVN',
                            'Waterfall',
                        ],
                    },
                ],
                date: 'January 2024 - July 2024',
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
                            'Git',
                        ],
                    },
                    {
                        description:
                            'Developed a demo ATM web service for our Japanese client to showcase their new ATM application to their clients.',
                        tech: ['JavaScript', 'HTML', 'Bootstrap + Sass', 'C#'],
                    },
                    {
                        description: `I was assigned to provide bank support for our Japanese client's ATMs here in the Philippines. My tasks include fixing bugs in their legacy base code and developing new functionalities based on specific bank requests. Banks: BDO, MBTC, and EWB`,
                        tech: ['C++', 'VBScript', 'Git', 'SVN', 'Waterfall'],
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
        about: 'My Portfolio Website is a modern, responsive web application designed to showcase my professional work and personal projects in an engaging and interactive manner. Built using a combination of cutting-edge web technologies, this project highlights my skills in web development and design.',
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
        about: 'The Fake Store project is a hands-on application developed to practice and showcase skills in integrating and working with APIs. This project simulates an e-commerce platform, leveraging a mock API to deliver a realistic shopping experience while focusing on effective API usage and data handling.',
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
        about: 'The Dota 2 Heroes Project is a web application developed to explore and showcase data from the popular game Dota 2. Created out of my passion for the game and a desire to practice API integration, this project provides a detailed and interactive interface for browsing and learning about Dota 2 heroes.',
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
        about: 'WeLift is a comprehensive web application developed as our capstone project during my final year of college. The platform is designed to simplify the process of booking moving services, specifically tailored for individuals and families needing assistance with relocations, also known as "lipat bahay." WeLift connects users with reliable moving service providers, streamlining the logistics of moving household items.',
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
        about: 'Overflow is a feature-rich note-taking application developed as a capstone project by my friend, with significant contributions from me. Designed to provide an efficient and user-friendly platform for managing personal notes, Overflow enhances productivity through its intuitive interface and robust functionality.',
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
        about: 'The Advanced Calculator is a web-based application developed to practice and refine my JavaScript skills. This tool offers a variety of advanced mathematical functions, showcasing my ability to implement complex calculations and create an interactive user interface using JavaScript.',
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
        about: 'The Basic Calculator is a simple web application developed as an initial project while I was learning JavaScript. This project serves as a foundational exercise in applying JavaScript to create a functional calculator with essential arithmetic operations.',
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
        about: `The Facebook Clone is a web application developed to replicate the design and user interface of Facebook. This project focuses on creating a visually accurate and interactive clone of Facebook's design, providing an opportunity to practice front-end development skills and understand complex UI/UX elements.`,
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
        about: 'The Amusement Park Management System is a Windows Forms application developed as a final project during my second year of college. This system is designed to streamline and manage various operations within an amusement park, including ticket sales, ride management, and customer services. It was selected as one of the best projects, showcasing its effectiveness and impact.',
        tech: ['C#', 'Windows Forms'],
        date: '2019',
        links: {
            github: 'https://github.com/crljhnmngs/Amusement-Park-Management-System',
            live: '',
        },
    },
];
