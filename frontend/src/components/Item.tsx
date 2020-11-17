import React from 'react';
import * as type from '../utils/types/types';
import { updateRequest } from '../redux/request';
import { connect } from 'react-redux';

const Item: React.FC<type.ItemProps> = ({ data, updateRequest }) => {
    const toggleRequest = (data: type.MaintenanceRequest) => {
        updateRequest(data);
    };

    return (
        <div className={data.close ? 'item item--close' : 'item'}>
            <div className="item__name">{data.name}</div>
            <div className="item__unit">{data.unitNumber}</div>
            <div className="item__service">{data.serviceType}</div>
            <div className="item__summary">{data.summary}</div>
            <button
                className="btn btn--delete"
                onClick={() => toggleRequest(data)}
            >
                Close
            </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    updateRequest: (data: type.MaintenanceRequest) =>
        dispatch(updateRequest(data)),
});

export default connect(null, mapDispatchToProps)(Item);
