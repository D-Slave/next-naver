import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {TextField} from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";

const loraList = [
    {value: 'fantasy', label: 'fantasy'},
    {value: 'china', label: 'china'},
] as const;
export default function Lora() {

    return (
        <Card>
            <CardHeader title="Add Lora" />
            <Divider />
            <CardContent>
                <Grid container spacing={6} wrap="wrap">
                    <Grid md={4} sm={6} xs={12}>
                        <InputLabel>Lora</InputLabel>
                        <Select label="Lora" name="Lora" variant="outlined" fullWidth>
                            {loraList.map((item)=>(
                                <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid md={4} sm={6} xs={12}>
                        <InputLabel>Lora</InputLabel>
                        <Select label="Lora" name="Lora" variant="outlined" fullWidth>
                            {loraList.map((item)=>(
                                <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid md={4} sm={6} xs={12}>
                        <InputLabel>Lora</InputLabel>
                        <Select label="Lora" name="Lora" variant="outlined" fullWidth>
                            {loraList.map((item)=>(
                                <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}