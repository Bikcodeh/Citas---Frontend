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
}

export const ProjectContext = createContext<ProjectContextType>({
    drawerOpen: false,
    setDrawerOpen: () => { },
    projects: [],
    isLoadingProjects: true
});

export const ProjectProvider: React.FC<Props> = ({ children }) => {
    const { getProjectsQuery } = useGetProjects();
    const { isError, isLoading, data, error } = getProjectsQuery;
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(data || []);
    }, [data])

    return (
        <ProjectContext.Provider value={{
            isLoadingProjects: isLoading,
            errorProjects: error,
            projects,
            drawerOpen,
            setDrawerOpen
        }}>
            {children}
        </ProjectContext.Provider>
    )
}