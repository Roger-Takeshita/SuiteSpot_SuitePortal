import React from 'react';
import * as type from '../utils/types/types';
import FormLogin from '../components/FormLogin';

const LoginPage = () => {
    const handleSubmit = async (data: type.LoginForm) => {
        console.log(data);
    };

    return <FormLogin onSubmit={handleSubmit} />;
};

export default LoginPage;
