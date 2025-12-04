"use client";
import { useParams } from "next/navigation";

interface Project {
  title: string;
  description: string;
}

interface Projects {
  "simple media": Project;
  "diction daily": Project;
  "snapshot api": Project;
  "application monkey": Project;
}

const projects: Projects = {
  "simple media": {
    title: "Simple Media",
    description: ""
  },
  "diction daily": {
    title: "Diction Daily",
    description: ""
  },
  "snapshot api": {
    title: "Snapshot API",
    description: ""
  },
  "application monkey": {
    title: "Application Monkey",
    description: ""
  }
};

export default function ProjectPage() {
  const params = useParams();
  const rawSlug = params.slug;

  // TYPE-NARROWING: ensure rawSlug is exactly a string
  let slug: string;
  if (Array.isArray(rawSlug)) {
    slug = rawSlug[0];
  } else if (typeof rawSlug === "string") {
    slug = rawSlug;
  } else {
    return <h1>Page Not Found!</h1>;
  }

  // safe to use decodeURIComponent now
  const key = decodeURIComponent(slug).toLowerCase();

  const project = projects[key as keyof Projects];

  if (!project) {
    return <h1>Page Not Found!</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-800">
      <div className="flex flex-col items-center py-10 pl-10 w-2/3">
        <div className="flex flex-col w-fit">
          <h1 className="font-bold text-3xl text-white pt-5">
            {project.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
