import Grid from "@mui/material/Grid";
import SideBar from "@/app/components/sideBar";
import Sidebar2 from "@/app/components/sideBar2";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import {ReactElement} from "react";
import PropTypes, {ReactElementLike} from "prop-types";
import {HTMLElementType} from "@mui/utils";

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
        <Grid container spacing={1}>
          <Sidebar2  archives={archives} description={description} title={'타이틀'}/>
        </Grid>
    )
  }