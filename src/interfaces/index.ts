export interface RegisterFormData {
    name?: string;
    email?: string;
    password?: string;
    confirm_password?: string;
}

export interface ApiResponse {
    msg: string;
    status?: string;
    success?: boolean;
}

export interface UserResponse {
    _id: string;
    name: string;
    email: string;
    token: string;
}