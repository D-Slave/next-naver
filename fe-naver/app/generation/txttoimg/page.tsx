import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import {TextToImagePrompt} from "@/components/generation/txttoimg/Prompt";

export default function Page(){
    return (
        <Stack spacing={3}>
            {/*<div>*/}
            {/*    <Typography variant="h4">텍스트 이미지 생성</Typography>*/}
            {/*</div>*/}
            <Grid container spacing={3}>
                <Grid lg={12} md={6} xs={12}>
                    <TextToImagePrompt />
                </Grid>
            </Grid>
        </Stack>
    )
}