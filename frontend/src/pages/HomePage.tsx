import React from 'react';
import FormRequest from '../components/FormRequest';
import * as type from '../utils/types/types';

const Home = () => {
    const handleSubmit = (data: type.MaintenanceRequest) => {
        console.log(data);
    };
    return <FormRequest onSubmit={handleSubmit} />;
};

export default Home;
