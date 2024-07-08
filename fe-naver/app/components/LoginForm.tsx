import * as React from 'react';
import {useState} from "react";

type LoginFormProps = {
    onSubmit: (form: {email: string, password: string}) => void;
};

function LoginForm({onSubmit}: LoginFormProps) {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const { email, password } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            email: '',
            password: ''
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="email" type="email" value={email} onChange={onChange} />
            <input name="password" type="password" value={password} onChange={onChange} />
            <button type="submit">로그인</button>
        </form>
    );
}

export default LoginForm;