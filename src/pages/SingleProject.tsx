import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import { useGetSingleProject } from "../hooks/useGetSingleProject";

export const SingleProject = () => {

  const { id = '' } = useParams();
  const { singleProjectQuery  } = useGetSingleProject(id)
  const { isLoading, isSuccess, isError, error, data } = singleProjectQuery;

  if (isLoading) return (<Loading />)

  return (
    <div>{ JSON.stringify(data)}</div>
  )
}
