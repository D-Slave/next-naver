'use client'
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import {TextToImagePrompt} from "@/components/generation/txttoimg/Prompt";
import Card from "@mui/material/Card";
import Lora from "@/components/generation/txttoimg/Lora";
import ControlNet from "@/components/generation/controlnet";
import LoadImage from "@/components/generation/load-image";
import IpAdaptor from "@/components/generation/ipadaptor";
import Box from "@mui/material/Box";
import {FormEvent} from "react";

export default function Page(){
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            positive: data.get('Positive'),
            negative: data.get('Negative'),
            checkPoint: data.get('CheckPoint'),
            lora: data.get('Lora'),
        })
    }
    return (
        <Stack spacing={3}>
            <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid lg={12} md={12} xs={12}>
                        <Card>
                            <TextToImagePrompt/>
                        </Card>
                        <Card>
                            <Lora/>
                        </Card>

                        <Card>
                            <ControlNet/>
                        </Card>
                        <Card>
                            <LoadImage/>
                        </Card>
                        <Card>
                            <IpAdaptor />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Stack>

)
}