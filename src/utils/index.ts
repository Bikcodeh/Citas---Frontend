import { AxiosError } from "axios";

export const getErrorMessage = (error: unknown): string => {
    if (error instanceof AxiosError) {
        return error.response?.data.error;
    } else {
        return (error as Error).message;
    }
}