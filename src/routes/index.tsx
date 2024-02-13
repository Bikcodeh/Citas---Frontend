import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../layout';
import {
    ConfirmAccountPage,
    ForgotPasswordPage,
    LoginPage,
    NewPasswordPage,
    RegisterPage
} from '../pages';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="forgot-password" element={<ForgotPasswordPage />} />
                    <Route path='forgot-password' element={<NewPasswordPage />} />
                    <Route path='forgot-password/:token' element={<NewPasswordPage />} />
                    <Route path='confirm/:id' element={<ConfirmAccountPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}