// src/config.js
import { Award, BookOpen, Briefcase, Code, Newspaper, MessageSquare, Mail, Github, Linkedin, Phone } from 'lucide-react';

export const navItems = [
    { id: 'home', label: 'Home', icon: Mail },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'academic-journey', label: 'Academics', icon: BookOpen },
    { id: 'experience', label: 'Journey', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'updates', label: 'News', icon: Newspaper },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
];

export const portfolioConfig = {
    personal: {
        name: "Zhong Xian Sim",
        tagline: "ZX.SIM",
        titles: [
            "Electrical-Mechatronics Engineer",
            "Robotics Enthusiast",
            "AI Researcher",
            "Problem Solver"
        ],
        description: "Passionate about robotics, AI, and innovative engineering solutions. Translating complex theory into functional reality through code and hardware.",
        image: "1731061514308.jpg",
    },

    contact: {
        email: "simxian@graduate.utm.my",
        phone: "+6014-6002369",
        github: "https://github.com/simzx02",
        linkedin: "https://www.linkedin.com/in/simzhongxian/"
    },

    achievements: [
        { icon: "🎓", title: "3.95/4.0 CGPA", description: "Outstanding academic performance consistently across all semesters.", color: "indigo" },
        { icon: "🏆", title: "Dean's List (x8)", description: "Awarded Dean's List recognition for 8 consecutive semesters for academic excellence.", color: "purple" },
        { icon: "🌍", title: "IELTS Band 7.0", description: "Proficient English communication skills suitable for global research environments.", color: "blue" }
    ],

    education: [
        {
            period: "2021 - Present",
            degree: "Bachelor of Mechatronics Engineering",
            institution: "Universiti Teknologi Malaysia (UTM)",
            highlights: [
                "Specializing in Robotics and Embedded Systems.",
                "Active member of the Robotics Club.",
                "Capstone Project: Contact Lens Packaging Detector."
            ]
        },
        {
            period: "2020 - 2021",
            degree: "Foundation in Engineering",
            institution: "Universiti Teknologi Malaysia (UTM)",
            highlights: [
                "Graduated with High Distinction. Built strong fundamentals in Mathematics and Physics."
            ]
        }
    ],

    experience: [
        {
            period: "Sep 2025 - Nov 2025",
            role: "Robotics Research Intern",
            company: "A*STAR, Singapore",
            description: "Working on advanced robotics with ROS2, Dexterous Hand manipulation, and Tactile Sensors. SIPGA Award Recipient."
        },
        {
            period: "Jul 2024 - Oct 2024",
            role: "Design Verification Intern",
            company: "Advanced Micro Devices (AMD)",
            description: "Executed UNIX-based testing, developed data scraping tools, and optimized Python/C shell scripts for efficiency."
        },
        {
            period: "Aug 2023 - Sep 2023",
            role: "Technical Trainee Intern",
            company: "CADVision System",
            description: "Assisted in SolidWorks training and supported application engineers in customer inquiries."
        }
    ],

    projects: [
        { title: "CHIPS: Cardio Health System", description: "AI-powered disease prediction integrating IoT sensors (MAX30102) with neural networks for real-time monitoring.", tags: ["Python", "IoT", "AI/ML"], github: "https://github.com/simzx02/cardio", icon: "🫀" },
        { title: "KongsiPark Smart Parking", description: "Intelligent parking management solution. Awarded RM5k seed grant and RM2k at Student Innovator Challenge.", tags: ["Startup", "Smart City"], demo: "#", icon: "🚗" },
        { title: "Lens Packaging Detector", description: "Smart manufacturing system using computer vision to detect defects in contact lens packaging with pneumatic sorting.", tags: ["OpenCV", "Python"], github: "https://github.com/simzx02/Capstone-Contact-Lens-Packaging-Detector-Optimizer", icon: "👁️" }
    ],

    skills: [
        { name: "Python", icon: "🐍" },
        { name: "C/C++", icon: "⚙️" },
        { name: "ROS2", icon: "🤖" },
        { name: "Arduino", icon: "🔋" },
        { name: "Linux", icon: "🐧" },
        { name: "Git", icon: "🌲" },
        { name: "SolidWorks", icon: "📐" },
        { name: "MATLAB", icon: "📊" },
        { name: "OpenCV", icon: "🧠" },
        { name: "IoT", icon: "🌐" }
    ],

    updates: [
        { date: "Oct 25, 2025", title: "Completed SIPGA Internship", description: "Successfully wrapped up my research attachment at A*STAR Singapore. Published internal findings on tactile sensors.", color: "indigo" },
        { date: "Sep 10, 2025", title: "Hackathon Winner 🏆", description: "Won 1st Runner Up at the National Robotics Hackathon with our autonomous drone project.", color: "purple" }
    ]
};