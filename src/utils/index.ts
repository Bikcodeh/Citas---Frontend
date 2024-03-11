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
    const fecha = new Date(date);
    const dia = fecha.getDate().toString().padStart(2, '0'); // Obtener el día y asegurarse de que tenga 2 dígitos
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes (se suma 1 porque los meses empiezan en 0) y asegurarse de que tenga 2 dígitos
    const anio = fecha.getFullYear(); // Obtener el año
    return `${dia}/${mes}/${anio}`;
}