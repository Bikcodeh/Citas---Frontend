import { PreviewProject } from "../components";
import Loading from "../components/Loading";
import { useProjects } from "../hooks"

export const Projects = () => {

  const { projects, isLoadingProjects } = useProjects();  

  if (isLoadingProjects) return (<Loading />)
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-4xl font-black">Projects</h1>
      <div className="flex flex-col flex-1 bg-white shadow mt-10 rounded">
        {
          projects.length ? 
          projects.map(project => (<PreviewProject key={project._id} project={project} />)) : 
          <p className="text-center w-full text-gray-600 uppercase">No Projects yet</p>
        }
      </div>
    </div>
  )
}
