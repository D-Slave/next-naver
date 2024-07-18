'use client'
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import {TextToImagePrompt} from "@/components/generation/txttoimg/Prompt";
import Card from "@mui/material/Card";
import Lora from "@/components/generation/txttoimg/Lora";
import ControlNet from "@/components/generation/controlnet";
import LoadImage from "@/components/generation/load-image";
import IpAdaptor from "@/components/generation/ipadaptor";

export default function Page(){
    return (
        <Stack spacing={3}>
            {/*<div>*/}
            {/*    <Typography variant="h4">텍스트 이미지 생성</Typography>*/}
            {/*</div>*/}
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
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
            </form>
        </Stack>

)
}