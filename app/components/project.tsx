interface ProjectProps {
  projectName: string;
  projectDescription: string;
}
export default function Project({projectName, projectDescription}: ProjectProps) {
    // <img src="" placeholder="Simple Media Image"/>
    return(
        <div className="w-1/3 min-w-[320px] text-white py-10">
            <h2 className="text-xl font-bold">
                {projectName}
            </h2>
            
            <p className="text-lg">
                {projectDescription}
            </p>
        </div>
    )
}