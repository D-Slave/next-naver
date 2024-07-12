import SideBar from "@/app/components/sideBar";
import * as React from "react";
import Box from "@mui/material/Box";

export default function BoardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const archives = [{
        url: '/',
        title: 'home'
    },{
        url: '/board',
        title: 'board'
    }]

    const description = '게시판 사이드바'
    return (
        <Box>
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3}}>
                {children}
            </Box>
        </Box>
    )
  }