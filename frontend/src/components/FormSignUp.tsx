import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import * as type from '../utils/types/types';

const FormSignUp: React.FC<type.FormSignUpProps> = ({ onSubmit }) => {
    const initialState: type.SignupForm = {
        email: '',
        password: '',
        confirmPassword: '',
    };
    const [form, setForm] = useState(initialState);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(form);
        setForm(initialState);
    };

    const handleChange = ({
        target: { name, value },
    }: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const isFormValid = (): boolean => {
        return !(
            form.email.trim() !== '' &&
            form.password.trim() !== '' &&
            form.confirmPassword.trim() !== '' &&
            form.email.length > 0 &&
            form.password.length > 0 &&
            form.confirmPassword.length > 0 &&
            form.password === form.confirmPassword
        );
    };

    return (
        <div className="login-form">
            <h2>Sign Up</h2>
            <form className="login-form__form" onSubmit={handleSubmit}>
                <div className="login-form__input-container">
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="login-form__input"
                    />
                    <label className="login-form__label" htmlFor="email">
                        Email
                    </label>
                </div>
                <div className="login-form__input-container">
                    <input
                        type="text"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Password"
                        minLength={4}
                        className="login-form__input"
                    />
                    <label className="login-form__label" htmlFor="password">
                        Password
                    </label>
                </div>
                <div className="login-form__input-container">
                    <input
                        type="text"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        minLength={4}
                        className="login-form__input"
                    />
                    <label
                        className="login-form__label"
                        htmlFor="confirmPassword"
                    >
                        Password
                    </label>
                </div>
                <div className="login-form__cta">
                    <button
                        className={isFormValid() ? 'btn btn--disabled ' : 'btn'}
                        type="submit"
                        disabled={isFormValid()}
                    >
                        Sign Up
                    </button>
                    <Link to="/login" className="btn btn--signup">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default FormSignUp;
