import { AxiosError } from "axios";

export const getErrorMessage = (error: unknown): string => {
    if (error instanceof AxiosError) {
         if (error.response) {
            return error.response?.data.msg
        } else {
            return error.message
        }
    } else {
        return (error as Error).message;
    }
}

export const formatDate = (date: Date | undefined): string | null => {
    if (!date) return null;
    const dateFormated = new Date(date);
    const day = dateFormated.getDate().toString().padStart(2, '0'); 
    const month = (dateFormated.getMonth() + 1).toString().padStart(2, '0'); 
    const year = dateFormated.getFullYear();
    return `${year}-${month}-${day}`;
}