import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { Project } from "../interfaces";
import { useGetProjects } from "../hooks/useGetProject";
import { useAuth } from "../hooks";

interface Props {
    children: React.ReactNode;
}

export type ProjectContextType = {
    drawerOpen: boolean;
    isLoadingProjects: boolean;
    projects: Project[];
    errorProjects?: any;
    isError: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    setProjects: Dispatch<SetStateAction<Project[]>>;
    deleteProject: (id: string) => void;
}

export const ProjectContext = createContext<ProjectContextType>({
    drawerOpen: false,
    setDrawerOpen: () => { },
    projects: [],
    isError: false,
    isLoadingProjects: true,
    setProjects: () => { },
    deleteProject: () => { }
});

export const ProjectProvider: React.FC<Props> = ({ children }) => {
    const { user } = useAuth();
    const { getProjectsQuery } = useGetProjects();
    const { isError, isFetching, data, error } = getProjectsQuery;
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);

    const deleteProject = (id: string) => {
        setProjects(projects.filter(p => p._id !== id))
    }

    useEffect(() => {
        setProjects(data || [])
    }, [data])

    useEffect(() => {
     if (user) {
        getProjectsQuery.refetch()
     }
    }, [user])
    
    

    return (
        <ProjectContext.Provider value={{
            isLoadingProjects: isFetching,
            errorProjects: error,
            projects,
            drawerOpen,
            isError,
            setDrawerOpen,
            setProjects,
            deleteProject
        }}>
            {children}
        </ProjectContext.Provider>
    )
}