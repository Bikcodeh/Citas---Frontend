import { FormControl, FormLabel, Input, FormErrorMessage, Button } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import * as Yup from 'yup';


export const ProjectForm = () => {

    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
    });

    const handleOnSubmit = (name: string) => {
        console.log('sbmit', name)
    }

    return (
        <div className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
            <Formik
                initialValues={{ name: '' }}
                validationSchema={formSchema}
                validateOnChange
                validateOnBlur
                onSubmit={(values) => {
                    handleOnSubmit(values.name)
                }}
            >{({ isSubmitting, errors, handleChange }) => (
                <Form>
                    <FormControl isInvalid={!!errors.name} className="py-4">
                        <FormLabel>Project Name</FormLabel>
                        <Input id="name" onChange={handleChange} name="name" placeholder='Name' />
                        <FormErrorMessage>{errors.name}</FormErrorMessage>
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
