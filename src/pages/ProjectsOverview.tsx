import {Header} from "../components/header/Header.tsx";
import css from "./ProjectsOverview.module.css"
import {FilterOptions} from "../components/filterOptions/FilterOptions.tsx";
import {Projects} from "../components/projects/Projects.tsx";
import {useState} from "react";
import * as ProjectData from "../ProjectData.ts";






export function ProjectsOverview(){
    const [selectedTechnologies, setSelectedTechnologies] = useState<ProjectData.Technologies[]>([])

    return <div className={css.pageDiv}>
        <Header headerTile={"Overview"}/>
        <div className={css.filterDiv}>
            <FilterOptions selectedTechnologies={selectedTechnologies}
                           setSelectedTechnologies={setSelectedTechnologies}/>
        </div>
        <hr className={css.lineHr}/>
        <div className={css.projectDiv}>
            <Projects selectedTechnologies={selectedTechnologies}/>
        </div>
    </div>
}