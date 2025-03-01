import * as tokenService from './tokenService';
import * as type from '../types/types';

const apiRequestHelper = async (
    type: string,
    url: string,
    data?: {}
): Promise<any> => {
    const option: type.RequestOptions = {
        method: type,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokenService.getToken(),
        },
    };
    if (data && type !== 'GET') option.body = JSON.stringify(data);
    const response = await fetch(url, option);
    const responseJSON = await response.json();
    if (response.ok) return responseJSON;
    throw new Error(responseJSON.message);
};

export default apiRequestHelper;
