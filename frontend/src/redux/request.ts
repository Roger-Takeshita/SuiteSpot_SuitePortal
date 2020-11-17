import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import * as reqService from '../utils/api/reqService';
import * as type from '../utils/types/types';

const GET_REQUESTS: string = 'GET_REQUESTS';
const UPDATE_REQUEST: string = 'UPDATE_REQUEST';

export const getRequests = () => {
    const url = 'http://localhost:3001/api/maintenance-requests';

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const response: type.MaintenanceRequest[] = await reqService.getData(
                url
            );

            dispatch({
                type: GET_REQUESTS,
                payload: response,
            });
        } catch (error) {
            alert(error.message);
            // throw new Error(error.message);
        }
    };
};

export const updateRequest = (data: type.MaintenanceRequest) => {
    const url = `http://localhost:3001/api/maintenance-requests/${data._id}/close`;

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const response = await reqService.updateData(url, data);

            dispatch({
                type: UPDATE_REQUEST,
                payload: [response],
            });
        } catch (error) {
            alert(error.message);
            // throw new Error(error.message);
        }
    };
};

function requestReducer(
    state: type.MaintenanceRequest[] = [],
    action: { type: string; payload: type.MaintenanceRequest[] }
) {
    switch (action.type) {
        case GET_REQUESTS:
            return [...action.payload];
        case UPDATE_REQUEST:
            const idx = state.findIndex(
                (item) => item._id === action.payload[0]._id
            );

            return [
                ...state.slice(0, idx),
                action.payload[0],
                ...state.slice(idx + 1, state.length),
            ];
        default:
            return state;
    }
}

export default requestReducer;
