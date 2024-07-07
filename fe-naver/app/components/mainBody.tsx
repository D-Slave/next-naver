import Grid from "@mui/material/Grid";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Naver",
    description: "Main Contents"
}

export default function MainBody({
 children
    }: Readonly<{ children: React.ReactNode;
}>) {
    return (
        <Grid sm={10} style={{backgroundColor:"gray", height:"100vh"}}>
            {children}
        </Grid>
    )
}