"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";

export default function NavBar() {
    const router = useRouter();
    const MenuList = [
        {
            text: '신규오픈',
            url: '/new-campaign'
        },
        {
            text: '게시판',
            url: '/board'
        },
        {
            text: '로그인',
            url: '/user/login'
        }
    ]


    return (
        <>
            <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
            <Typography variant="h6" noWrap component="a" href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                리뷰포인트
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {MenuList.map((item, i) => (
                    <Button
                        key={item.text}
                        onClick={() => router.push(item.url)}
                        sx={{my: 2, color: 'white', display: 'block'}}
                    >{item.text}</Button>
                ))}
            </Box>
        </>
    )
        ;
}