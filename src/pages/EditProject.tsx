import { useParams } from "react-router-dom"
import { useGetSingleProject } from "../hooks/useGetSingleProject";
import Loading from "../components/Loading";
import { DataFormProject, ProjectForm } from "../components";
import { useMutation } from "react-query";
import uptaskApi from "../api/uptaskApi";
import { Project } from "../interfaces";

export const EditProject = () => {
    const editProjectMutation = useMutation((data: DataFormProject) => uptaskApi.post<Project>('project', { ...data }))

    const {
        isLoading: loadingEdit,
        isError: isErrorEdit,
        isSuccess: successEdit,
        error: errorEdit,
        data: dataEdit
    } = editProjectMutation;

    const { id = '' } = useParams();
    const { singleProjectQuery } = useGetSingleProject(id)
    const { isLoading, isFetching, isSuccess, isError, error, data } = singleProjectQuery;
    if (!data) return;
    const { name } = data;

    if (isLoading || isFetching) return (<div className="flex flex-1 justify-center"><Loading /></div>)
    return (
        <>
            <h1 className="text-4xl mt-10 font-black absolute">{name}</h1>
            <div className="flex flex-1 justify-center items-center">
                <ProjectForm
                    isEditing
                    project={data}
                    isLoading={loadingEdit}
                    error={errorEdit}
                    isError={isErrorEdit}
                    isSuccess={successEdit}
                    onSubmit={(e) => editProjectMutation.mutate(e)}
                />
            </div>
        </>
    )
}
