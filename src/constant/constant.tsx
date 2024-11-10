import { UserObject } from "@/models/User"
import { Navitems } from "@/models/Header"

export const userinfo: UserObject = {
    name : 'Muhammad Usaid',
    picture : '',
    heading: 'Hello! My name is Muhammad Usaid, and I am both an AI Generative Engineer and an Electronic Engineer. I am deeply passionate about merging electronics with artificial intelligence to develop cutting-edge solutions that enhance efficiency and innovation. I am excited to explore new opportunities and bring my expertise in AI-driven electronics to transformative projects!',
    about: `
        <p> <b>AI Expertise:</b> I specialize in using artificial intelligence to create innovative solutions, including generating images, content, and ideas to help businesses grow and improve.</p>

        <p><b>Electronic Engineer:</b>As an Electronic Engineer, I has designed and implemented various projects using Arduino and Digital Logic Design (DLD), bringing innovative concepts to life with hands-on circuit building..</p>

        <p><b>Commitment to Quality</b>: My goal is to deliver high-quality, reliable AI solutions that solve real-world problems, with a focus on simplicity and effectiveness in every project.</p>
        `,
    skills: ['Next JS', 'DSA', 'OOP', 'Python', 'C++', 'TypeScript', 'HTML', 'Tailwind CSS', 'CSS', 'C'],   
}

export const headerItems : Navitems = {
    home : {label : 'Home', page : 'home'},
    about : {label : 'About', page : 'about'},
    project : {label : 'Projects', page : 'projects'}
}

export const projects = {
    gmail: { image: '/lib.jpeg', name: 'Library Managment System' },
    flipkart: { image: '/quizz.jpeg', name: 'Quiz Game' },
    google: { image: '/health.jpeg', name: 'Health Reminder System' },
    indeed: { image: '/food.jpeg', name: 'Movie Ticket and Food Ordering' },
    crud: { image: '/students.jpeg', name: 'Student Meeting' },
    aws: { image: '/calculator.jpeg', name: 'CountDown Timer' },
};