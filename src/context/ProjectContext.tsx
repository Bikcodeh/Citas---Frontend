import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { Project } from "../interfaces";
import { useGetProjects } from "../hooks/useGetProject";

interface Props {
    children: React.ReactNode;
}

export type ProjectContextType = {
    drawerOpen: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    projects: Project[];
    isLoadingProjects: boolean;
    errorProjects?: any;
    setProjects: Dispatch<SetStateAction<Project[]>>;
    deleteProject: (id: string) => void;
}

export const ProjectContext = createContext<ProjectContextType>({
    drawerOpen: false,
    setDrawerOpen: () => { },
    projects: [],
    isLoadingProjects: true,
    setProjects: () => { },
    deleteProject: () => {}
});

export const ProjectProvider: React.FC<Props> = ({ children }) => {
    const { getProjectsQuery } = useGetProjects();
    const { isError, isLoading, data, error } = getProjectsQuery;
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);

    const deleteProject = (id: string) => {
        setProjects(projects.filter(p => p._id !== id))
    }

    useEffect(() => {
        setProjects(data || []);
    }, [data])

    return (
        <ProjectContext.Provider value={{
            isLoadingProjects: isLoading,
            errorProjects: error,
            projects,
            drawerOpen,
            setDrawerOpen,
            setProjects,
            deleteProject
        }}>
            {children}
        </ProjectContext.Provider>
    )
}