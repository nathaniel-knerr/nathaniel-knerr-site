interface ProjectProps {
  projectName: string;
  projectDescription: string;
}
export default function Project({projectName, projectDescription}: ProjectProps) {
    // <img src="" placeholder="Simple Media Image"/>

    
    return(
        <a href={`/project/${encodeURIComponent(projectName.toLowerCase())}`} className="w-1/4 min-w-[280px] text-white py-10">
            <h2 className="text-xl font-bold">
                {projectName}
            </h2>
            
            <p className="text-lg">
                {projectDescription}
            </p>
        </a>
    )
}