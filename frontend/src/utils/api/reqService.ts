import apiRequestHelper from './apiService';

const getData = (url: string) => {
    return apiRequestHelper('GET', url);
};

const addData = (url: string, data: {}) => {
    return apiRequestHelper('POST', url, data);
};

const updateData = (url: string, data: {}) => {
    return apiRequestHelper('POST', url, data);
};

const deleteData = (url: string, data: {}) => {
    return apiRequestHelper('DELETE', url, data);
};

const loginUser = (url: string, data: {}) => {
    return apiRequestHelper('POST', url, data);
};

const signUpUser = (url: string, data: {}) => {
    return apiRequestHelper('POST', url, data);
};

export { getData, addData, updateData, deleteData, loginUser, signUpUser };
