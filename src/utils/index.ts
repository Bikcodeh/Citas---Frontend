import { AxiosError } from "axios";

export const getErrorMessage = (error: unknown): string => {
    console.log('vamos');
    if (error instanceof AxiosError) {
         if (error.response) {
            return error.response?.data.msg
        } else {
            return error.message
        }
    } else {
        console.log('else');
        return (error as Error).message;
    }
}