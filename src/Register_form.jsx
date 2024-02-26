import React from 'react';
import RegForm from './Regform';

const RegisterForm = ({ id }) => {
    const numFields = id === 1 ? 4 : id === 2 ? 3 : 2; // Adjust based on your requirements


    const fields = Array.from({ length: numFields }, (_, i) => (
        <div key={i}>
            <label htmlFor={`name-${i}`}>Name {i + 1}</label>
            <input type="text" id={`name-${i}`} />

            <label htmlFor={`rollno-${i}`}>Roll No {i + 1}</label>
            <input type="text" id={`rollno-${i}`} />
        </div>
    ));

    return (
        <div>
            <RegForm numFields={numFields} />
        </div>
    );
};

export default RegisterForm;