import { useQuery } from "react-query"
import uptaskApi from "../api/uptaskApi"
import { Project } from "../interfaces"

const getSingleProject = async (id: string) => {
    const { data } = await uptaskApi<Project>(`project/${id}`)
    return data
}
export const useGetSingleProject = (id: string) => {
    const singleProjectQuery = useQuery({
        queryKey: ['get-single-project'],
        queryFn: () => getSingleProject(id),
        refetchOnWindowFocus: false
    })

    return {
        singleProjectQuery
    }
}