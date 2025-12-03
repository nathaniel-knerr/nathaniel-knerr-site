'use client'
import Sidebar from "./components/sidebar"
import Project from "./components/project"
import { useRef } from "react";


export default function Home() {
    const resumeRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    return(
        <div className="flex flex-col justify-center items-center bg-gray-800">
        <Sidebar resumeRef={resumeRef} projectsRef={projectsRef}></Sidebar>
        <div className="flex flex-col items-center py-10 pl-10 w-2/3">
        <div className="flex flex-col w-fit">
            <h1 ref={resumeRef} className="font-bold text-3xl text-white pt-5">Nathaniel Knerr</h1>
            <span className="text-lg text-white pt-5">
                La Habra, CA, 90631 — <a href="tel:+15628446841" class="text-blue-400 underline">+1 (562) 844 6841</a> — <a class="text-blue-400 underline" href="mailto:n.knerr@yahoo.com">n.knerr@yahoo.com</a>
            </span>
            <p className="font-bold italic text-lg text-white pt-5">
                Fullstack developer specializing in React, Angular, containerization, AI systems, and relational databases
            </p>
            <h2 className="font-bold text-2xl text-white pt-15">Work Experience</h2>
            <h3 className="text-xl text-white pt-5">
                Deepiri AI — AI Systems Engineer Internship — 2025 to Present:
            </h3>
            <ul className="text-lg text-white list-disc">
                <li className="pt-5">
                    Built and maintained inference servers using FastAPI/Uvicorn; scaled model-serving pipelines with Docker/Kubernetes
                </li>
                <li className="pt-5">
                    Optimized request handling, concurrency, and GPU memory usage; supported versioned deployment of AI models
                </li>
                <li className="pt-5">
                    Assisted in A/B testing, monitoring model performance, and collaborating on CI/CD pipelines
                </li>
            </ul>
            <h2 className="font-bold text-2xl text-white pt-15" >Education</h2>
            <ul className="text-lg text-white list-disc">
                <li className="pt-5">
                    Cypress College — A.S. in Computer Science (Transferring to B.S.) — Expected 2029
                </li>
                <li className="pt-5">
                    Google Mentorship — 2025 to Present
                </li>
                <li className="pt-5">
                    Completed Google for Developers Courses — Linear and Logistic Regression for Machine Learning
                </li>
                <li className="pt-5">
                    La Habra High School — Highest Honors Graduate — 4.2 GPA Skills
                </li>
            </ul>
            <h2 className="font-bold text-2xl text-white pt-15">Skills</h2>
            <ul className="text-lg text-white list-disc">
                <li className="pt-5">
                    Languages: JavaScript, TypeScript, Python, SQL
                </li>
                <li className="pt-5">
                    Frameworks & Libraries: React, Angular, Express.js, Next.js, Tailwind CSS, FastAPI, Uvicorn, Puppeteer, Playwright, Scikit-Learn
                </li>
                <li className="pt-5">
                    Databases: MySQL, PostgreSQL, Firebase
                </li>
                <li className="pt-5">
                    Tools: Git, GitHub, Docker, Kubernetes, Linux (Ubuntu), VS Code, Netlify, Vercel, Render
                </li>
                <li className="pt-5">
                    Concepts: REST APIs, Machine Learning (Regression, Neural Networks), CI/CD pipelines, Web Automation
                </li>
            </ul>
            <h2 ref={projectsRef} className="font-bold text-2xl text-white pt-15">Personal Projects</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
            <Project projectName="Simple Media" projectDescription="A social media app that is better for your mental health"></Project>
            <Project projectName="Diction Daily" projectDescription="An educational tool that teaches a new English word every day"></Project>
            <Project projectName="Snapshot API" projectDescription="An easy to use web scraping tool to document public webpages in frontend development environments"></Project>
            <Project projectName="Application Monkey" projectDescription="An automated cover letter generator"></Project>
        </div>
        </div>
        </div>
    )
}