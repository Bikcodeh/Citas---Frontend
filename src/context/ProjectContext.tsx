import React, { Dispatch, SetStateAction, createContext, useState } from "react";

interface Props {
    children: React.ReactNode;
}

export type ProjectContextType = { 
    drawerOpen: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

export const ProjectContext = createContext<ProjectContextType>({
    drawerOpen: false,
    setDrawerOpen: () => {}
});

export const ProjectProvider: React.FC<Props> = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <ProjectContext.Provider value={{ drawerOpen, setDrawerOpen}}>
            {children}
        </ProjectContext.Provider>
    )
}