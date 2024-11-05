import * as yup from 'yup';

export const userSchema = yup.object().shape({
    name: yup.string()
        .matches(/^[A-Za-z]+$/, 'Name should only contain letters')
        .min(2, 'Please provide proper name')
        .required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(10, 'Password must be at most 10 characters')
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
        .required('Password is required')
});