import css from "./Projects.module.css"
import * as ProjectData from "../../ProjectData.ts";
import {useEffect, useState} from "react";



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

                    return <div className={css.cardDiv}>
                        <h3>{project.projectName}</h3>
                        <p>{project.description}</p>
                        <div>
                            <h4>Github Repo</h4>
                            {project.githubUrls.map(githubUrl =>
                                <>
                                    <a target={"_blank"} href={githubUrl}>{githubUrl}</a>
                                    <br/>
                                </>
                            )}
                        </div>
                        <div>
                            <h4>Live Url</h4>
                            <a target={"_blank"} href={project.liveUrl}>{project.liveUrl}</a>
                        </div>
                        <div>
                            <h4>Technologies Used</h4>
                            |
                            {project.technologiesUsed.map(technology =>
                                <>
                                    {" "}{technology} |
                                </>
                            )}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}