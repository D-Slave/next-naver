"use client"
import * as React from "react";
import LoginForm from "@/app/components/LoginForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


export default function Page() {
    const onSubmit = (form: {email: string, password: string}) => {
        console.log('form', form);
    }
    return (
        // <Container maxWidth="sm">
            <Box
                height={200}
                width={200}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
            >
                <LoginForm onSubmit={onSubmit} />
            </Box>
        //</Container>
    )
}