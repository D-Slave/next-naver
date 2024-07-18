import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import InputLabel from "@mui/material/InputLabel";

export default function IpAdaptor() {

    return (
        <Card>
            <CardHeader title="ipAdaptor" />
            <Divider />
            <CardContent>
                <Grid container spacing={2} wrap="wrap">
                    <Grid md={4} sm={6} xs={12}>
                        <InputLabel>IpAdaptor FaceID</InputLabel>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}