import { useMutation } from "react-query"
import { DataFormProject, ProjectForm } from "../components"
import { uptaskApi } from "../api/uptaskApi"
import { ApiResponse } from "../interfaces"

export const NewProject = () => {
  const createProjectMutation = useMutation((data: DataFormProject) => uptaskApi.post<ApiResponse>('project', {...data}, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }))

  const {isLoading, isError, isSuccess, data, error } = createProjectMutation;
  return (
    <>
      <h1 className="text-4xl mt-10 font-black absolute">New Project</h1>
      <div className="mt-28 flex flex-1 justify-center items-center">
        <ProjectForm isSuccess={isSuccess} isLoading={isLoading} isError={isError} error={error} onSubmit={(data) => createProjectMutation.mutate(data)}/>
      </div>
    </>
  )
}
