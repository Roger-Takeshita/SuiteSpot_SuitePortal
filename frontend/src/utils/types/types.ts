export type LoginForm = {
    email: string;
    password: string;
};

export type SignupForm = {
    email: string;
    password: string;
    confirmPassword: string;
};

export type RequestOptions = {
    method: string;
    headers: {
        'Content-Type': string;
        Authorization: string;
    };
    body?: any;
};

export type User = {
    email: string;
};

export type AppProps = {
    user: User;
};

export type SignUpPageProps = {
    signUpUser: (data: SignupForm) => void;
};

export type LoginPageProps = {
    loginUser: (data: LoginForm) => void;
};

export type FormRequestProps = {
    onSubmit: (data: MaintenanceRequest) => void;
};

export type FormLoginProps = {
    onSubmit: (data: LoginForm) => void;
};

export type FormSignUpProps = {
    onSubmit: (data: SignupForm) => void;
};

export interface MaintenanceRequest {
    _id?: string;
    unitNumber: string;
    name: string;
    email: string;
    serviceType: string;
    summary: string;
    details?: string;
}
