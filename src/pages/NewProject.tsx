import { useMutation } from "react-query"
import { DataFormProject, ProjectForm } from "../components"
import { uptaskApi } from "../api/uptaskApi"
import { Project } from "../interfaces"
import { useProjects } from "../hooks"
import { useEffect } from "react"

export const NewProject = () => {
  const createProjectMutation = useMutation((data: DataFormProject) => uptaskApi.post<Project>('project', {...data}, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }))

  const {isLoading, isError, isSuccess, error, data } = createProjectMutation;
  const { projects, setProjects } = useProjects()

  useEffect(() => {
    if (data?.data) {
      setProjects([...projects, data.data])
    }

  }, [data?.data])
  
  return (
    <>
      <h1 className="text-4xl mt-10 font-black absolute">New Project</h1>
      <div className="mt-28 flex flex-1 justify-center items-center">
        <ProjectForm isSuccess={isSuccess} isLoading={isLoading} isError={isError} error={error} onSubmit={(data) => createProjectMutation.mutate(data)}/>
      </div>
    </>
  )
}
