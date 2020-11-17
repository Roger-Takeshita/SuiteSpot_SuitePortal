import apiRequestHelper from './apiService';

const getData = async (url: string) => {
    return await apiRequestHelper('GET', url);
};

const addData = async (url: string, data: {}) => {
    return await apiRequestHelper('POST', url, data);
};

const updateData = async (url: string, data: {}) => {
    return await apiRequestHelper('POST', url, data);
};

const deleteData = async (url: string, data: {}) => {
    return await apiRequestHelper('DELETE', url, data);
};

const loginUser = async (url: string, data: {}) => {
    return await apiRequestHelper('POST', url, data);
};

const signUpUser = async (url: string, data: {}) => {
    return await apiRequestHelper('POST', url, data);
};

export { getData, addData, updateData, deleteData, loginUser, signUpUser };
