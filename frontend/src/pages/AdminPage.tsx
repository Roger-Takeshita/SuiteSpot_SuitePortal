import React, { useEffect } from 'react';
import { getRequests, updateRequest } from '../redux/request';
import { connect } from 'react-redux';
import * as type from '../utils/types/types';
import Item from '../components/Item';

const AdminPage: React.FC<type.AdminPageProps> = ({
    requests,
    getRequests,
}) => {
    useEffect(() => {
        getRequests();
    }, [getRequests]);

    return (
        <div>
            {/* <ul className="request__list">{list}</ul> */}
            <div className="item-header">
                <div className="item-header__name">Name</div>
                <div className="item-header__unit">Unit</div>
                <div className="item-header__service">Service Type</div>
                <div className="item-header__summary">Summary</div>
            </div>
            {requests.length > 0 &&
                requests.map((item) => {
                    return <Item key={item._id!} data={item} />;
                })}
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    getRequests: () => dispatch(getRequests()),
    updateRequest: (data: type.MaintenanceRequest) =>
        dispatch(updateRequest(data)),
});

const mapStateToProps = (state: any) => ({
    requests: state.requests,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
