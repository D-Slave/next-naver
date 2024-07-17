import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const OpenPoseModelList = [
    {value: 'opsd15', label: 'opsd15'},
    {value: 'opsd21', label: 'opsd21'},
]
const DepthModelList = [
    {value: 'desd15', label: 'desd15'},
    {value: 'desd21', label: 'desd21'},
]
const LineArtModelList = [
    {value: 'lasd15', label: 'lasd15'},
    {value: 'lasd21', label: 'lasd21'},
]

export default function ControlNet() {

    return (
        <Card>
            <CardHeader title="ControlNet" />
            <Divider />
            <CardContent>
                <Grid container spacing={6} wrap="wrap">
                    <Grid md={4} sm={6} xs={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="OpenPose" />
                            <InputLabel>OpenPose</InputLabel>
                            <Select label="OpenPose">
                                {OpenPoseModelList.map((item)=>(
                                    <MenuItem key={item.value} value={item.value}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormGroup>
                    </Grid>
                    <Grid md={4} sm={6} xs={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Depth" />
                            <InputLabel>Depth</InputLabel>
                            <Select label="Depth">
                                {DepthModelList.map((item)=>(
                                    <MenuItem key={item.value} value={item.value}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormGroup>
                    </Grid>
                    <Grid md={4} sm={6} xs={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Lineart" />
                            <InputLabel>LineArt</InputLabel>
                            <Select label="LineArt">
                                {LineArtModelList.map((item)=>(
                                    <MenuItem key={item.value} value={item.value}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormGroup>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}