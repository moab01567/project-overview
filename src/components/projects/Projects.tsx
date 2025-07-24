import css from "./Projects.module.css"
import * as ProjectData from "../../ProjectData.ts";
import {useEffect, useState} from "react";
import {ProjectCard} from "./ProjectCard.tsx";



interface ProjectsProps {
    selectedTechnologies: ProjectData.Technologies[]
}

export function Projects({selectedTechnologies}: ProjectsProps) {
    const [displayProjects, setDisplayProjects] = useState<ProjectData.Project[]>(ProjectData.projects)


    useEffect(() => {
        if (selectedTechnologies.length == 0)setDisplayProjects(ProjectData.projects);

        else{
            setDisplayProjects(
                ProjectData.projects.filter(project =>{
                    for (const selectedTechnology of selectedTechnologies) {
                        for (const technology of project.technologiesUsed) {
                            if (selectedTechnology == technology ) return true;
                        }
                    }
                    return false;
            }))
        }



    }, [selectedTechnologies]);


    return <>
        <div className={css.mainDiv}>
            <h2>Projects</h2>
            <div className={css.projectCardsDiv}>

                {displayProjects.map(project => {
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    </>
}