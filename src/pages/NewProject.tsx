import { ProjectForm } from "../components"

export const NewProject = () => {
  return (
    <>
      <h1 className="text-4xl mt-10 font-black absolute">New Project</h1>
      <div className="mt-28 flex flex-1 justify-center items-center">
        <ProjectForm />
      </div>
    </>
  )
}
