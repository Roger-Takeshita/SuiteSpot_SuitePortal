import React from 'react';
import FormRequest from '../components/FormRequest';
import * as type from '../utils/types/types';
import * as reqService from '../utils/api/reqService';

const HomePage = () => {
    const handleSubmit = async (data: type.MaintenanceRequest) => {
        const url = 'http://localhost:3001/api/maintenance-requests';

        try {
            const response = await reqService.addData(url, data);
            alert(`Request received successfully! ${JSON.stringify(response)}`);
        } catch (error) {
            alert(error.message);
        }
    };

    return <FormRequest onSubmit={handleSubmit} />;
};

export default HomePage;
