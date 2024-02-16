export interface RegisterFormData {
    name?: string;
    email?: string;
    password?: string;
    confirm_password?: string;
}

export interface ApiResponse {
    message: string;
}