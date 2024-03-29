import { FormControl, FormLabel, Input, FormErrorMessage, Button, Textarea } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from 'yup';
import AlertMessage from "./AlertMessage";
import { formatDate, getErrorMessage } from "../utils";
import { useEffect } from "react";
import { Project } from "../interfaces";

export type DataFormProject = {
    name: string;
    description: string;
    date: string;
    client: string;
}

interface Props {
    project?: Project;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    isEditing?: boolean;
    error: any;
    onSubmit: (data: DataFormProject) => void;
}

const formSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    description: Yup.string()
        .required('Required'),
    date: Yup.string()
        .required('Required'),
    client: Yup.string()
        .required('Required')
});


export const ProjectForm: React.FC<Props> = ({ onSubmit, isLoading, isError, error, isSuccess, isEditing = false, project }) => {
    const initialData: DataFormProject = {
        name: project?.name || '',
        description: project?.description || '',
        date: formatDate(project?.deadline) || '',
        client: project?.client || ''
    }

    const formik = useFormik({
        initialValues: initialData,
        validationSchema: formSchema,
        onSubmit: values => {
            onSubmit(values)
        }
    })

    useEffect(() => {
        if (isSuccess) {
            formik.resetForm()
        }
    }, [isSuccess])


    return (
        <div className="bg-white py-10 px-5 md:w-1/2 h-min rounded-lg shadow">
            {
                isError && (<AlertMessage dismissible={true} status="error" message={getErrorMessage(error)} title="" />)
            }
            {
                isSuccess && (<AlertMessage status="success" message={`Project ${isEditing ? 'Updated' : 'Created'}`} title="" />)
            }
            <form onSubmit={formik.handleSubmit}>
                <FormControl isInvalid={!!formik.errors.name} className="py-2">
                    <FormLabel>Project Name</FormLabel>
                    <Input value={formik.values.name} id="name" onChange={formik.handleChange} name="name" placeholder='Name' />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.description} className="py-2">
                    <FormLabel>Description</FormLabel>
                    <Textarea value={formik.values.description} id="descripcion" onChange={formik.handleChange} name="description" placeholder='Description' />
                    <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.date} className="py-4">
                    <FormLabel>Due Date</FormLabel>
                    <Input value={formik.values.date} id="date" type="date"  onChange={(e) => formik.setFieldValue('date', e.target.value)} name="date" />
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.client} className="mb-10">
                    <FormLabel>Client</FormLabel>
                    <Input value={formik.values.client} id="client" onChange={formik.handleChange} name="client" placeholder='Client' />
                    <FormErrorMessage>{formik.errors.client}</FormErrorMessage>
                </FormControl>
                <Button
                    isLoading={isLoading}
                    loadingText='Submitting'
                    variant='solid'
                    type="submit"
                    disabled={isLoading}
                    colorScheme='blue'
                    fontWeight='bold'
                    className="w-full py-6 uppercase rounded hover:cursor-pointer transition-colors"
                >{isEditing ? 'Update' : 'Create'}
                </Button>
            </form>
        </div>
    )
}
