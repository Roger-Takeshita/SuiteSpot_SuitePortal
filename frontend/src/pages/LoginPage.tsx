import React from 'react';
import * as type from '../utils/types/types';
import FormLogin from '../components/FormLogin';
import { loginUser } from '../redux/user';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LoginPage: React.FC<type.LoginPageProps> = ({ loginUser }) => {
    const history = useHistory();

    const handleSubmit = async (data: type.LoginForm) => {
        loginUser(data);
        history.push('/admin');
    };

    return <FormLogin onSubmit={handleSubmit} />;
};

const mapDispatchToProps = (dispatch: any) => ({
    loginUser: (data: type.LoginForm) => dispatch(loginUser(data)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
