import { headerItems, userinfo } from "@/constant/constant"; 
import Image from "next/image"; 
import { projects } from "@/constant/constant"; 

export default function Projects() { 
  return ( 
    <section id={headerItems.project.page} className="projects">
    <h1 className="projects__heading">Projects</h1>
    <div className="projects__grid">
        {Object.keys(projects).map(project => (
            <div key={project} className="projects__item">
                <Image
                    src={projects[project as keyof typeof projects].image}
                    alt=""
                    width={300}
                    height={300}
                    className="projects__image"
                />
                <p className="projects__name">{projects[project as keyof typeof projects].name}</p>
            </div>
        ))}
    </div>
</section>

  ); 
}
