'use client';
import * as React from "react";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AdbIcon from "@mui/icons-material/Adb";
import {useRouter} from "next/navigation";

export default function SideBar() {
    const router = useRouter();

    const drawerWidth = 240;
    const MenuList = [
        {
            text: '신규오픈',
            url: '/'
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
    const SubMenuList = [
        {
            text: 'Index',
            url: '#1'
        },
        {
            text: 'Starred',
            url: '#2'
        }
    ]
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
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
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {MenuList.map((item, i) => (
                                <Button
                                    key={item.text}
                                    onClick={()=>router.push(item.url)}
                                    sx={{ my:2, color: 'white', display: 'block'}}
                                >{item.text}</Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
                }}
            >
                <Toolbar/>
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        {/*{['Index', 'Starred', 'Send email', 'Drafts'].map((text, index) => (*/}
                        {/*    <ListItem key={text} disablePadding>*/}
                        {/*        <ListItemButton>*/}
                        {/*            <ListItemIcon>*/}
                        {/*                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}*/}
                        {/*            </ListItemIcon>*/}
                        {/*            <ListItemText primary={text}/>*/}
                        {/*        </ListItemButton>*/}
                        {/*    </ListItem>*/}
                        {/*))}*/}
                        {SubMenuList.map((item, i) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text}  onClick={()=>router.push(item.url)}>

                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}