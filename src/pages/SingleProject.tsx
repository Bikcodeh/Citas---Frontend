import { Link, useParams } from "react-router-dom"
import Loading from "../components/Loading"
import { useGetSingleProject } from "../hooks/useGetSingleProject";

export const SingleProject = () => {

  const { id = '' } = useParams();
  const { singleProjectQuery } = useGetSingleProject(id)
  const { isLoading, isFetching, isSuccess, isError, error, data } = singleProjectQuery;
  if (!data) return;
  const { name } = data;

  if (isLoading || isFetching) return (<div className="flex flex-1 justify-center"><Loading /></div>)

  return (
    <div className="flex w-full flex-row justify-between p-5">
      <h1 className="font-black text-4xl">{name}</h1>
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
        <Link to={`/projects/edit/${id}`}>Edit</Link>
      </div>
    </div>
  )
}
