import { Link } from "react-router-dom";
import { Project } from "../interfaces"

interface Props {
  project: Project;
}

export const PreviewProject: React.FC<Props> = ({ project }) => {
  return (
    <div className="border-b p-5 flex">
      <p className="flex-1">
        {project.name}
        <span className="text-sm text-gray-500 uppercase">{' '} {project.client}</span>
      </p>
      <Link
        to={`${project._id}`}
        className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold"
      >
        See more
      </Link>
    </div>
  )
}
