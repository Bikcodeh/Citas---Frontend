import React, { createContext } from "react";

interface Props {
    children: React.ReactNode;
}

export const ProjectContext = createContext<null>(null);

export const ProjectProvider: React.FC<Props> = ({ children }) => {
    return (
        <ProjectContext.Provider value={null}>
            {children}
        </ProjectContext.Provider>
    )
}