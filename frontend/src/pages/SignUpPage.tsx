import React from 'react';
import * as type from '../utils/types/types';
import FormSignUp from '../components/FormSignUp';
import { signUpUser } from '../redux/user';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SignUpPage: React.FC<type.SignUpPageProps> = ({ signUpUser }) => {
    const history = useHistory();

    const handleSubmit = async (data: type.SignupForm) => {
        try {
            signUpUser(data);
            history.push('/admin');
        } catch (error) {
            console.log(error.message);
        }
    };

    return <FormSignUp onSubmit={handleSubmit} />;
};

const mapDispatchToProps = (dispatch: any) => ({
    signUpUser: (data: type.SignupForm) => dispatch(signUpUser(data)),
});

export default connect(null, mapDispatchToProps)(SignUpPage);
