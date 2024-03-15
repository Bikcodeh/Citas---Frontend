import { useParams } from "react-router-dom"
import Loading from "../components/Loading";
import { DataFormProject, ProjectForm } from "../components";
import { useMutation } from "react-query";
import uptaskApi from "../api/uptaskApi";
import { Project } from "../interfaces";
import { useEffect, useState } from "react";
import { useProjects } from "../hooks";

export const EditProject = () => {
    const { setProjects, projects, isLoadingProjects } = useProjects();
    const { id = '' } = useParams();

    const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined)

    const editProjectMutation = useMutation((data: DataFormProject) => uptaskApi.put<Project>(`project/${id}`, { ...data }))

    const {
        isLoading: loadingEdit,
        isError: isErrorEdit,
        isSuccess: successEdit,
        error: errorEdit,
        data: dataEdit
    } = editProjectMutation;

    useEffect(() => {
        if (dataEdit?.data) {
            setProjects(currentProjects => {
                const updatedProjects = currentProjects.map(p => {
                    if (p._id === id) {
                        setSelectedProject(undefined)
                        return { ...dataEdit.data };
                    }
                    return p;
                });
                return updatedProjects;
            });
        }
    }, [dataEdit?.data])

    useEffect(() => {
        if (projects.length > 0) {
            const project = projects.find(p => p._id == id)
            setSelectedProject(project)
        }
    }, [projects])

    if (isLoadingProjects) {
        return (<div className="flex flex-1 justify-center"><Loading /></div>)
    }

    return (
        <>
            {selectedProject && (
                <>
                    <h1 className="text-4xl mt-10 font-black absolute">{selectedProject.name}</h1>
                    <div className="flex flex-1 justify-center items-center">
                        <ProjectForm
                            isEditing
                            project={selectedProject}
                            isLoading={loadingEdit}
                            error={errorEdit}
                            isError={isErrorEdit}
                            isSuccess={successEdit}
                            onSubmit={(e) => editProjectMutation.mutate(e)}
                        />
                    </div>
                </>
            )}
        </>
    )
}
