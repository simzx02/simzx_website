// src/config.js
//import { link } from "fs";
import {
  Award,
  BookOpen,
  Briefcase,
  Code,
  Newspaper,
  MessageSquare,
  Mail,
  Github,
  Linkedin,
  Phone,
  Link,
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", icon: Mail },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "academic-journey", label: "Academics", icon: BookOpen },
  { id: "experience", label: "Journey", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Award },
  { id: "updates", label: "News", icon: Newspaper },
  { id: "contact", label: "Contact", icon: MessageSquare },
];

export const portfolioConfig = {
  personal: {
    name: "Zhong Xian Sim",
    tagline: "Zhong Xian Sim",
    titles: [
      "Graduated Engineer",
      "Robotics Enthusiast",
      //"Ongoing Researcher",
      "Problem Solver",
    ],
    description:
      "Passionate about robotics, AI, and innovative engineering solutions. Translating complex theory into practical knowledge.",
    image: "1731061514308.jpg",
  },

  contact: {
    email: "simxian@graduate.utm.my",
    phone: "+6014-600XXXX",
    github: "https://github.com/simzx02",
    linkedin: "https://www.linkedin.com/in/simzhongxian/",
  },

  achievements: [
    {
      icon: "🎓",
      title: "MK69 Convocation Alumni Prize Award @ UTM",
      description:
        "Top 0.001% academic performance with excellent extra-curricular activities in UTM.",
      color: "indigo",
      year: "2025",
    },
    {
      icon: "🏆",
      title: "Dean's Award @ UTM",
      description:
        "Awarded Dean's List recognition for 8 consecutive semesters for academic excellence.",
      color: "purple",
      year: "2025",
    },
    {
      icon: "🤖",
      title:
        "A*STAR Singapore International Pre-Graduate Award (SIPGA) @ A*STAR",
      description: "Internship oppoortunity in Singapore with A*STAR I2R.",
      color: "pink",
      year: "2025",
    },
    {
      icon: "🌍",
      title: "IELTS Band 7.0 ",
      description: "Proficient English skills.",
      color: "blue",
      year: "2025",
    },
    {
      icon: "💰",
      title: "Start-up Competitions and Challenges @ UTM, KNU",
      description: "Win RM5k seed grant and RM2k monetary prizes.",
      color: "green",
      year: "2025",
    },
    {
      icon: "⚙️",
      title:
        "3rd for Employablility Initiative Team Award @ Majlis Anugerah Gemilang Mahasiswa @ UTM",
      description:
        "Award ceremony for the most impactful event organised throughout the year",
      color: "yellow",
      year: "2025",
    },
    {
      icon: "📜",
      title: "KAIST EE Camp Participants @ KAIST",
      description: "Fully funded 2-day visit at KAIST campus at Daejeon.",
      color: "red",
      year: "2024",
    },
  ],

  education: [
    {
      period: "2021 - 2025",
      degree: "Bachelor of Engineering (Electrical-Mechatronics) with Honours",
      institution: "Universiti Teknologi Malaysia (UTM), Johor, Malaysia",
      highlights: [
        "CGPA 3.95 / 4.00. Graduated with First Class Honours.",
        //"Specializing in Robotics and Embedded Systems.",
        //"Active member of the Robotics Club.",
        //"Capstone Project: Contact Lens Packaging Detector."
      ],
    },
    {
      period: "2020 - 2021",
      degree: "Foundation in Science",
      institution: "Kolej Matrikulasi Kedah (KMK), Kedah, Malaysia",
      highlights: ["CGPA 4.00 / 4.00. Graduated with Distinction."],
    },
  ],

  experience: [
    {
      period: "Dec 2025 - Feb 2025",
      role: " Research Intern",
      company: "USM INOR, Penang, Malaysia",
      description: "Exploring...",
    },
    {
      period: "Sep 2025 - Nov 2025",
      role: "Robotics Research Intern",
      company: "A*STAR, Singapore",
      description:
        "Working on advanced robotics with ROS2, Dexterous Hand manipulation and Tactile Sensors. SIPGA Award Recipient.",
    },
    {
      period: "Jul 2024 - Oct 2024",
      role: "Design Verification Intern",
      company: "AMD, Penang, Malaysia",
      description:
        "Executed UNIX-based testing, developed data scraping tools, and optimized Python/C shell scripts for efficiency.",
    },
    {
      period: "Aug 2023 - Sep 2023",
      role: "Technical Trainee Intern",
      company: "CADVision System, Penang, Malaysia",
      description:
        "Assisted in SolidWorks training and supported application engineers in customer inquiries.",
    },
  ],

  projects: [
    {
      title: "CHIPS: Cardio Health System",
      description:
        "AI-powered disease prediction integrating IoT sensors (MAX30102) with neural networks for real-time monitoring.",
      tags: ["Python", "IoT", "AI/ML", "Flutter", "Firebase"],
      github: "https://github.com/simzx02/cardio",
      image: "chips.png", //4:3 aspect ratio or 16:9
    },
    
    {
      title: "Lens Packaging Detector",
      description:
        "Smart manufacturing system using computer vision to detect defects in contact lens packaging with pneumatic sorting.",
      tags: ["OpenCV", "Python","Raspberry Pi", "Automation"],
      github:
        "https://github.com/simzx02/Capstone-Contact-Lens-Packaging-Detector-Optimizer",
      image: "capstone.png", //4:3 aspect ratio or 16:9
    },
  ],

  skills: [
    { name: "Python", icon: "🐍" },
    { name: "C", icon: "⚙️" },
    { name: "ROS & ROS2", icon: "🤖" },
    { name: "Arduino", icon: "🔋" },
    { name: "Linux", icon: "🐧" },
    { name: "Git", icon: "🌲" },
    { name: "SolidWorks", icon: "📐" },
    { name: "MATLAB", icon: "📊" },
    { name: "AI/ML", icon: "🧠" },
    { name: "IoT", icon: "🌐" },
    { name: "Computer Vision", icon: "👁️" },
    { name: "Flutter", icon: "💾" },
    { name: "Firebase", icon: "🎨" },
    { name: "Proteus", icon: "🧩" },
  ],

  updates: [
    {
      date: "Nov 30, 2025",
      title: "Offer from USM INOR accepted!",
      description: "Excited as upcoming intern at USM!",
      color: "blue",
      link: "https://inor.usm.my/",
    },
    {
      date: "Nov 28, 2025",
      title: "Completed SIPGA Internship!",
      description:
        "Successfully wrapped up my research attachment at A*STAR Singapore! Bye Singapore, Hello Malaysia!",
      color: "indigo",
    },
    {
      date: "Nov 18, 2025",
      title: "Graduated from UTM!",
      description: "Finally wrapped up my undergraduate studies!",
      color: "purple",
      link: "https://convocation.utm.my/galeri-buku-konvokesyen/#flipbook-df_25000/1/",
    },
  ],
};
