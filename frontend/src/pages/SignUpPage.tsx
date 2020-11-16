import React from 'react';
import * as type from '../utils/types/types';
import FormSignUp from '../components/FormSignUp';
import { signUpUser } from '../redux/user';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SignUpPage: React.FC<type.SignUpPageProps> = ({ signUpUser }) => {
    const history = useHistory();

    const handleSubmit = async (data: type.SignupForm) => {
        signUpUser(data);
        history.push('/admin');
    };

    return <FormSignUp onSubmit={handleSubmit} />;
};

const mapDispatchToProps = (dispatch: any) => ({
    signUpUser: (data: type.SignupForm) => dispatch(signUpUser(data)),
});

export default connect(null, mapDispatchToProps)(SignUpPage);
