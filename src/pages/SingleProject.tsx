import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import { useGetSingleProject } from "../hooks/useGetSingleProject";

export const SingleProject = () => {

  const { id = '' } = useParams();
  const { singleProjectQuery  } = useGetSingleProject(id)
  const { isLoading, isSuccess, isError, error, data } = singleProjectQuery;

  if (isLoading) return (<div className="flex flex-1 justify-center"><Loading /></div>)

  return (
    <div>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</div>
  )
}
