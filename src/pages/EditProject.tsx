import { useNavigate, useParams } from "react-router-dom"
import Loading from "../components/Loading";
import { DataFormProject, ModalConfirmation, ProjectForm } from "../components";
import { useMutation } from "react-query";
import uptaskApi from "../api/uptaskApi";
import { ApiResponse, Project } from "../interfaces";
import { useEffect, useState } from "react";
import { useProjects } from "../hooks";
import AlertMessage from "../components/AlertMessage";
import { getErrorMessage } from "../utils";

export const EditProject = () => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const deleteMutation = useMutation((id: string) => uptaskApi.delete<ApiResponse>(`project/${id}`));
    const { isError, error, isSuccess, data } = deleteMutation;
    const { setProjects, projects, isLoadingProjects, deleteProject } = useProjects();
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
            if(!project) navigate("/projects")
            setSelectedProject(project)
        }
    }, [projects])

    useEffect(() => {
        if (isSuccess) {
            setSelectedProject(undefined)
            deleteProject(id)
        }
     
    }, [isSuccess])
    

    if (isLoadingProjects) {
        return (<div className="flex flex-1 justify-center"><Loading /></div>)
    }

    return (
        <div className="flex flex-1 flex-col my-10 mx-10">
            {
                isError && (<AlertMessage status="error" message={getErrorMessage(error)} title="" />)
            }
            {
                isSuccess && (<AlertMessage status="success" message={data.data.msg} title="" />)
            }
            <ModalConfirmation onCloseModal={() => setOpenModal(false)} onConfirm={() => {
                deleteMutation.mutate(id)
                setOpenModal(false)
            }} header="Delete Project" title={`Are u sure u want to delete ${selectedProject?.name}`} open={openModal} confirmTitle="Delete" />
            {selectedProject && (
                <>
                    <div className="flex flex-row justify-between">
                        <h1 className="text-4xl font-black">Edit Project: {selectedProject.name}</h1>
                        <div className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            <button onClick={() => setOpenModal(true)}>Delete</button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
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
        </div>
    )
}
