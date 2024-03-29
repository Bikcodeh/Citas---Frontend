import { useQuery } from "react-query"
import uptaskApi from "../api/uptaskApi"
import { Project } from "../interfaces"

const getProjects = async () => {
    const { data } = await uptaskApi<Project[]>('project')
    return data
}

export const useGetProjects = () => {
    const getProjectsQuery = useQuery({
        queryKey: ['get-all-projects'],
        queryFn: () => getProjects(),
        enabled: !!localStorage.getItem('token'),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retryOnMount: false
    })

    return {
        getProjectsQuery
    }
}