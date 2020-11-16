import React from 'react';
import * as type from '../utils/types/types';
import FormSignUp from '../components/FormSignUp';

const SingUpPage = () => {
    const handleSubmit = async (data: type.SignupForm) => {
        console.log(data);
    };

    return <FormSignUp onSubmit={handleSubmit} />;
};

export default SingUpPage;
