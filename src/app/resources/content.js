import { InlineCode } from "@/once-ui/components";



const person = {
    firstName: 'Cosmas',
    lastName: 'Mandikonza',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Entrepreneurial Software Engineer And Innovator',
    avatar: '/images/avatar.jpg', // You'll need to add your photo to this path
    location: 'America/Chicago',  // Duluth, Minnesota timezone
    languages: ['English'] 
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Tech Newsletter</>,
    description: <>I write about software engineering, Entrepreneurship , and my journey in tech.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/CosmasMandikonza',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://linkedin.com/in/cosmas-mandikonza',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:cmandikonza@css.edu',
    }
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Entrepreneurial Software Engineer &  Innovator</>,
    subline: <>
        Hi, I'm Cosmas, a Computer Science student at The College of St Scholastica. My journey spans as far as  Switzerland, where I <InlineCode>collaborated</InlineCode> with students from <InlineCode> Harvard and ETH Zurich</InlineCode> at the <InlineCode>International Swiss Talent Forum</InlineCode> to develop an educational copyright-free app, democratizing access to learning resources. At Jackal Tech, I <InlineCode>engineered</InlineCode> healthcare solutions using ML models that transformed patient care, while my work at CodeAlpha <InlineCode>achieved</InlineCode> 90% accuracy in predictive stock analysis. As a Brilliant Black Minds Community Ambassador, I'm bridging diversity gaps in tech, creating content that improved interview success rates by 40%. From <InlineCode>leading</InlineCode> the Hult Prize campus initiatives to participating in Y Combinator's Startup School, I'm passionate about using technology to solve many complex challenges in healthcare, education and many more areas. 
    </>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from Duluth, Minnesota`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com' // Update with your actual calendar link
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>A passionate Entrepreneurial software engineer with a focus on creating innovative tech.Currently pursuing a BSc in Computer , I combine technical expertise with practical experience in developing life changing innovative  tools.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Jackal Tech',
                timeframe: 'Jun 2024 - Aug 2024',
                role: 'Software Engineering Intern',
                achievements: [
                    <>Collaborated with a cross-functional team on Jackal Health Card, streamlining healthcare data management</>,
                    <>Architected secure cloud-based storage using MongoDB and AWS with AES encryption</>,
                    <>Designed responsive UI in React, improving user adoption by 20%</>
                ],
                images: [] // Initialize empty images array
            },
            {
                company: 'CodeAlpha',
                timeframe: 'April 2024 - May 2024',
                role: 'Data Analyst',
                achievements: [
                    <>Developed predictive stock analysis models achieving 90% forecast accuracy</>,
                    <>Created dynamic data visualization dashboards improving decision-making efficiency by 15%</>
                ],
                images: [] // Initialize empty images array
            }
        ]
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'The College of St Scholastica',
                description: <>BSc in Computer Science, GPA: 3.7 (Graduating May 2028)<br/>
                Relevant Coursework: Calculus 1, Computer Architecture, Computer Security, Programming with Java</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Languages & Frameworks',
                description: <>Python, Java, JavaScript/TypeScript, HTML/CSS, PHP, React.js, Next.js, Angular, Express.js</>
            },
            {
                title: 'Cloud & Tools',
                description: <>AWS, Azure, Docker, Kubernetes, Git, MongoDB, TensorFlow, scikit-learn</>
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Technical Writing & Insights',
    description: `Read about software engineering, machine learning, and tech insights from ${person.name}`
}

// content.js

// ... (previous person, social, newsletter, home configurations)

const work = {
    label: 'Work',
    title: 'My Projects',
    description: `Innovative solutions in healthcare, education, and accessibility`,
    featured: [
        {
            slug: 'visassist',
            title: 'VisAssist',
            description: 'Real-time transcription assistant for auditory impaired individuals',
            image: '/images/projects/visassitt.jpg',
            tags: ['AssemblyAI', 'Accessibility', 'JavaScript']
        },
        {
            slug: 'bridgeedai',
            title: 'BridgeEd AI',
            description: 'AI-powered special education collaboration platform',
            image: '/images/projects/bridgeed.jpg',
            tags: ['AI', 'Education', 'React']
        },
        {
            slug: 'pregaid',
            title: 'Pregait',
            description: 'Secure, low-data maternity chat application',
            image: '/images/projects/pregaitt.jpg',
            tags: ['Healthcare', 'React', 'Node.js']
        },
        {
            slug: 'swissforum',
            title: 'Swiss Talent Forum Project',
            description: 'Unified directory for open-access educational materials',
            image: '/images/projects/swissforum.jpg',
            tags: ['Education', 'Research', 'Innovation']
        }
    ]
}

const gallery = {
    label: 'Gallery',
    title: 'Project Showcase',
    description: `Visual documentation of my technical projects and achievements`,
    images: [
        { 
            src: '/images/gallery/accomplish.jpg', 
            alt: 'Project Accomplishments',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/callforcode.jpg', 
            alt: 'Call for Code Project',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/istf.jpg', 
            alt: 'International Swiss Talent Forum Project',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/nasa.jpg', 
            alt: 'NASA Project',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/python.jpg', 
            alt: 'Python Project',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/shasha.jpg', 
            alt: 'Shasha Project',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/yggss.jpg', 
            alt: 'YGGSS Project',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/greenjobs.jpg', 
            alt: 'Green Jobs Initiative',
            orientation: 'horizontal'
        }
    ]
}

// Single export statement for all objects
export { person, social, newsletter, home, about, blog, work, gallery };