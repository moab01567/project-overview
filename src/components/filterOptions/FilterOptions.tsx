import css from "./FilterOptions.module.css"
import * as ProjectData from "../../ProjectData.ts";
import {useState} from "react";

interface Props {
    selectedTechnologies: ProjectData.Technologies[],
    setSelectedTechnologies: (selectedTechnologies: ProjectData.Technologies[]) => void
}


export function FilterOptions({selectedTechnologies, setSelectedTechnologies}: Props) {
    //Object.values() turns enum to list. no black magic here
    const [allTechnologies, setAllTechnologies] = useState<ProjectData.Technologies[]>(Object.values(ProjectData.Technologies))

    const handleSelectTechnology = (selectTechnology: ProjectData.Technologies) => {
        setAllTechnologies(
            allTechnologies.filter(
                technology => technology != selectTechnology)
        )
        setSelectedTechnologies([...selectedTechnologies, selectTechnology]);
    }

    const handleUnselectTechnology = (unSelectTechnology: ProjectData.Technologies) => {
        setSelectedTechnologies(
            selectedTechnologies.filter(
                technology => technology != unSelectTechnology)
        )
        setAllTechnologies([...allTechnologies, unSelectTechnology]);
    }

    return <>
        <div className={css.mainDiv}>
            <h2>Filter By Technologies</h2>
            <div className={css.divChips}>
                {
                    selectedTechnologies.map(technology =>
                        <div className={css.chip + " " + css.divChipsSelected}
                             onClick={() => handleUnselectTechnology(technology)}>
                            {technology}
                        </div>
                    )
                }
            </div>
            <div className={css.divChips}>
                {
                    allTechnologies.map(technology =>
                        <div className={css.chip} onClick={() => handleSelectTechnology(technology)}>
                            {technology}
                        </div>
                    )
                }
            </div>
        </div>
    </>
}