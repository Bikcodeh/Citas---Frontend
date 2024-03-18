import { PreviewProject } from "../components";
import AlertMessage from "../components/AlertMessage";
import Loading from "../components/Loading";
import { useProjects } from "../hooks"
import { getErrorMessage } from "../utils";

export const Projects = () => {

  const { projects, isLoadingProjects, isError, errorProjects } = useProjects();

  if (isLoadingProjects) return (<div className="flex flex-1 justify-center"><Loading /></div>)
  return (
    <>
      <h1 className="text-4xl font-black">Projects</h1>
      {
        isError && (<AlertMessage dismissible={true} status="error" message={getErrorMessage(errorProjects)} title="" />)
      }
      <div className="w-full h-min bg-white shadow mt-10 rounded">
        {
          projects.length > 0 ?
            projects.map(project => (<PreviewProject key={project._id} project={project} />)) :
            <p className="text-center p-10 w-full text-gray-600 uppercase">No Projects yet</p>
        }
      </div>
    </>
  )
}
