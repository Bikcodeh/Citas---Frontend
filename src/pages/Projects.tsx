import { useProjects } from "../hooks"

export const Projects = () => {
  const data = useProjects()
  return (
    <div>Projects</div>
  )
}
