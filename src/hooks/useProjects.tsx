import { useContext } from "react"
import { ProjectContext, ProjectContextType } from "../context/ProjectContext"

export const useProjects = (): ProjectContextType => {
    return useContext(ProjectContext);
}