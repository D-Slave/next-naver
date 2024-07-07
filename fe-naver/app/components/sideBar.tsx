'use client';
import Grid from "@mui/material/Grid";
import * as React from "react";
import {MenuList, Paper, Stack} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function SideBar() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen)=> !prevOpen);
    };
    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    }
    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(()=> {
        if (prevOpen.current && !open) {
            anchorRef.current!.focus()
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <Grid sm={2} style={{backgroundColor:"red", height:"100vh"}}>
            <Stack direction="row">
                <Paper>
                    <MenuList>
                        <MenuItem>사이드바 메뉴1</MenuItem>
                        <MenuItem>사이드바 메뉴2</MenuItem>
                        <MenuItem>사이드바 메뉴3</MenuItem>
                    </MenuList>
                </Paper>
            </Stack>
        </Grid>
    )
}