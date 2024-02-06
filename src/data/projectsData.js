import img1 from '../assets/png/mepco-smart.jpeg'
import img2 from '../assets/png/e-operations.png'
import img3 from '../assets/png/citizen-monitor.png'
import img4 from '../assets/png/Dashboard.PNG'

import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Mepco Smart',
        projectDesc: 'The Mepco smart portal is a web interface developed as part of the Power Sector Improvement Activities (PSIA). It provides power consumers with smart monitoring features such as load profile, power outage information,consumption trends, and payment trends. The portal utilizes Highcharts.js to display interactive graphs and incorporates Formik and Yup for requesting various power services like new connections, attribute changes, meter replacements, due date extensions, and more.',
        tags: [ 'React Js','Material UI','SCSS' ,'Typescript'],
        code: 'https://github.com/muhammadmuzammal56/MepcoSmart',
        demo: 'http://117.20.28.178:8040/',
        image: img1
    },
    {
        id: 2,
        projectName: 'e-operations',
        projectDesc: 'The e-Operations web portal, a component of the Power Sector Improvement Activities (PSIA), served as a role-based interface for field operations. It facilitated workflow processing for services initiated through MEPCO Smart.The portal integrated with other solutions, like CCMS and Billing, through APIs and featured an interactive dashboard with hierarchical statistics for MEPCOs divisions. Notably, it included the E-File, a comprehensive digital document tracking connection history and all services throughout its lifespan.',
        tags: ['React Js','Material UI','SCSS' ,'Javascript','Js-Pdf'],
        code: 'https://github.com/AmmadMughal20/e-Operations',
        demo: 'http://117.20.28.178:8037/',
        image: img2
    },
    {
        id: 3,
        projectName: 'Citizen Monitor',
        projectDesc: 'An admin portal to display hierarchical dashboard stats of theft case along with role based operations on the submitted electricity theft case developed during the anti-theft campaign launched by ministry of energy (MoE) power division of Pakistan.',
        tags: ['React Js','Material UI','SCSS' ,'Javascript','Tanstack Table'],
        code: 'https://github.com/AmmadMughal20/CitizenMonitor',
        demo: 'http://117.20.28.178:8044/',
        image: img3
    },
    {
        id: 4,
        projectName: 'Admin Panel',
        projectDesc: 'Built from scratch, our admin panel features a lively dashboard showcasing vital business metrics such as sales, revenue, and expenses. Utilizing React hooks, apexcharts, motion-framer, and contemporary CSS, it offers interactive charts and tables providing insights into order statuses and customer feedback, all within an elegant and intuitive interface.',
        tags: ['React Js','Material UI','Javascript','Apexcharts' ,'Framer-Motion','React-Circular-Progressbar'],
        code: 'https://github.com/muhammadmuzammal56/Dashboard',
        demo: 'https://dashboard-eight-rho-23.vercel.app/',
        image: img4
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/