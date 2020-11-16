import React, { ChangeEvent, FormEvent, useState } from 'react';
import * as type from '../utils/types/types';

const FormRequest: React.FC<type.FormProps> = ({ onSubmit }) => {
    const initialState = {
        unitNumber: '',
        name: '',
        email: '',
        serviceType: 'general',
        summary: '',
        details: '',
    };
    const [form, setForm] = useState<type.MaintenanceRequest>(initialState);

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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        onSubmit(form);
        setForm(initialState);
    };

    return (
        <div className="request-form">
            <h2>Maintenance Request Form</h2>
            <form className="request-form__form" onSubmit={handleSubmit}>
                <div className="request-form__input-container">
                    <input
                        className="request-form__input"
                        type="text"
                        name="unitNumber"
                        value={form.unitNumber}
                        onChange={handleChange}
                        placeholder="Apartment Unit #"
                    />
                    <label className="request-form__label" htmlFor="unitNumber">
                        Apartment Unit #
                    </label>
                </div>
                <div className="request-form__input-container">
                    <input
                        className="request-form__input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Requester Name"
                    />
                    <label className="request-form__label" htmlFor="name">
                        Requester Name
                    </label>
                </div>
                <div className="request-form__input-container">
                    <input
                        className="request-form__input"
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Requester Email"
                    />
                    <label className="request-form__label" htmlFor="email">
                        Requester Email
                    </label>
                </div>
                <div className="request-form__input-container">
                    <select
                        className="request-form__select"
                        name="serviceType"
                        value={form.serviceType}
                        onChange={handleChange}
                    >
                        <option value="general">general</option>
                        <option value="electrical">electrical</option>
                        <option value="pest-control">pest-control</option>
                        <option value="plumbing">plumbing</option>
                    </select>
                    <label className="request-form__label" htmlFor="select">
                        Service Type
                    </label>
                </div>
                <div className="request-form__input-container">
                    <input
                        className="request-form__input"
                        type="text"
                        name="summary"
                        value={form.summary}
                        onChange={handleChange}
                        placeholder="Summary"
                    />
                    <label className="request-form__label" htmlFor="summary">
                        Summary
                    </label>
                </div>
                <div className="request-form__input-container">
                    <textarea
                        className="request-form__input"
                        name="details"
                        value={form.details}
                        onChange={handleChange}
                        placeholder="Details"
                    />
                    <label className="request-form__label" htmlFor="details">
                        Details
                    </label>
                </div>
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormRequest;
