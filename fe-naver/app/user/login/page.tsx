"use client"
import * as React from "react";
import LoginForm from "@/app/components/LoginForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LoginForm2 from "@/app/components/LoginForm2";


export default function Page() {
    const onSubmit = (form: {email: string, password: string}) => {
        console.log('form', form);
    }
    return (
        // <LoginForm onSubmit={onSubmit} />
        <LoginForm2 />
    )
}