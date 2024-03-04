import { FormControl, FormLabel, Input, FormErrorMessage, Button, Textarea } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import * as Yup from 'yup';

type DataForm = {
    name: string;
    description: string;
    date: string;
    client: string;
}

const initialData: DataForm = {
    name: '',
    description: '', 
    date: '', 
    client: ''
}


export const ProjectForm = () => {

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

    const handleOnSubmit = (values: DataForm) => {
        console.log('sbmit', values)
    }

    return (
        <div className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
            <Formik
                initialValues={initialData}
                validationSchema={formSchema}
                validateOnChange
                validateOnBlur
                onSubmit={(values) => {
                    handleOnSubmit(values)
                }}
            >{({ isSubmitting, errors, handleChange }) => (
                <Form>
                    <FormControl isInvalid={!!errors.name} className="py-2">
                        <FormLabel>Project Name</FormLabel>
                        <Input id="name" onChange={handleChange} name="name" placeholder='Name' />
                        <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.description} className="py-2">
                        <FormLabel>Description</FormLabel>
                        <Textarea id="descripcion" onChange={handleChange} name="description" placeholder='Description' />
                        <FormErrorMessage>{errors.description}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.date} className="py-4">
                        <FormLabel>Due Date</FormLabel>
                        <Input id="date" type="date" onChange={handleChange} name="date" placeholder='Date' />
                        <FormErrorMessage>{errors.date}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.client} className="mb-10">
                        <FormLabel>Client</FormLabel>
                        <Input id="client" onChange={handleChange} name="client" placeholder='Client' />
                        <FormErrorMessage>{errors.client}</FormErrorMessage>
                    </FormControl>
                    <Button
                        isLoading={isSubmitting}
                        loadingText='Submitting'
                        variant='solid'
                        type="submit"
                        disabled={isSubmitting}
                        colorScheme='blue'
                        fontWeight='bold'
                        className="w-full py-6 uppercase rounded hover:cursor-pointer transition-colors"
                    >Sign Up
                    </Button>
                </Form>
            )
                }
            </Formik >
        </div>
    )
}
