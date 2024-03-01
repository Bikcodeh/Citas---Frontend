import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout, ProtectedRoute } from '../layout';
import {
    ConfirmAccountPage,
    ForgotPasswordPage,
    LoginPage,
    NewPasswordPage,
    NewProject,
    Projects,
    RegisterPage
} from '../pages';
import { AuthProvider } from '../context/AuthContext';
import { ProjectProvider } from '../context/ProjectContext';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ProjectProvider>
                    <Routes>
                        <Route path="/" element={<AuthLayout />}>
                            <Route index element={<LoginPage />} />
                            <Route path="register" element={<RegisterPage />} />
                            <Route path="forgot-password" element={<ForgotPasswordPage />} />
                            <Route path='forgot-password' element={<NewPasswordPage />} />
                            <Route path='forgot-password/:token' element={<NewPasswordPage />} />
                            <Route path='confirm/:id' element={<ConfirmAccountPage />} />
                        </Route>
                        <Route path='/projects' element={<ProtectedRoute />}>
                            <Route index element={<Projects />} />
                            <Route path='create-project' element={<NewProject />} />
                        </Route>
                    </Routes>
                </ProjectProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}