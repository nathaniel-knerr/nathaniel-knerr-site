"use client";
import { useParams } from "next/navigation";
import { ParamValue } from "next/dist/server/request/params";


interface Project {
    "title": string
    "description": string
} 


interface Projects {
    "simple media": Project,
    "diction daily": Project,
    "snapshot api": Project,
    "application monkey": Project
}


const projects: Projects = {
    "simple media": {
        "title": "Simple Media",
        "description": ""
    },
    "diction daily": {
        "title": "Diction Daily",
        "description": ""
    },
    "snapshot api": {
        "title": "Snapshot API",
        "description": ""
    },
    "application monkey": {
        "title": "Application Monkey",
        "description": ""
    }
}




export default function ProjectPage() {
    const params = useParams();
    const slug: ParamValue | undefined | Array<ParamValue> = params.slug;
    
 
    const project: Project = projects[decodeURIComponent(slug)];

    if (project === undefined) {
        return (
            <h1>
                Page Not Found!
            </h1>
        );
    }
    
    return (
        <div className="flex flex-col justify-center items-center bg-gray-800">
        <div className="flex flex-col items-center py-10 pl-10 w-2/3">
        <div className="flex flex-col w-fit">
            <h1  className="font-bold text-3xl text-white pt-5">{project.title}</h1>
        </div>
        </div>
        </div>
    );
}