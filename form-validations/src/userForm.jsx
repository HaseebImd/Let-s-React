import { userSchema } from "./Validations/userValidation";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { Alert, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const FormField = ({ name, label, value, onChange }) => (
    <div>
        <TextField
            id={`${name}-input`}
            name={name}
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
            fullWidth
            margin="normal"
        />
    </div>
);

export default function UserForm() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [status, setStatus] = useState({ error: '', success: '', isSuccess: false });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ error: '', success: '', isSuccess: false });
        setIsLoading(true);

        userSchema.validate(formData).then(() => {
            console.log('Validated');
            setStatus({ error: '', success: 'Form Submitted', isSuccess: true });
        }).catch((err) => {
            console.log(err.errors);
            setStatus({ error: err.errors, success: '', isSuccess: false });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Typography color="error">{status.error}</Typography>
                {status.isSuccess && (
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        {status.success}
                    </Alert>
                )}
                <FormField name="name" label="Name" value={formData.name} onChange={handleChange} />
                <FormField name="email" label="Email" value={formData.email} onChange={handleChange} />
                <FormField name="password" label="Password" value={formData.password} onChange={handleChange} />
                <Button variant="contained" type="submit" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
            </form>
        </div>
    );
}