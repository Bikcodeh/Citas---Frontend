import Loading from "../components/Loading";
import { useProjects } from "../hooks"

export const Projects = () => {

  const { projects, isLoadingProjects } = useProjects();
  
  if (isLoadingProjects) return (<Loading />)
  return (
    <div>{JSON.stringify(projects)}</div>
  )
}
