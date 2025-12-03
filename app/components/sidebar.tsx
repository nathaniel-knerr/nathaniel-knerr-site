
interface SidebarProps {
    projectsRef: React.RefObject<HTMLDivElement | null>;
    resumeRef: React.RefObject<HTMLDivElement | null>;
}


export default function Sidebar({resumeRef, projectsRef}: SidebarProps) {


    function scrollToResumeRef() {
        if (resumeRef.current) {
            resumeRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("resumeRef.current not found!");
        }
    };


    function scrollToProjectsRef() {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("projectsRef.current not found!");
        }
    };


    return(
        <div className="fixed top-0 left-0 w-1/6 py-5">
            <div className="flex flex-col w-100% justify-center text-center">
                <div className="border-b-2 border-transparent bg-linear-to-r from-green-400 to-blue-400">
                    <button onClick={scrollToResumeRef} className="text-white w-1/1 text-lg hover:underline bg-gray-800 py-5">Resume</button>
                </div>
                <div className="border-b-2 border-transparent bg-linear-to-r from-green-400 to-blue-400">
                    <button onClick={scrollToProjectsRef} class="text-white w-1/1 text-lg hover:underline bg-gray-800 py-5">Projects</button>
                </div>
            </div>
        </div>
    )
}