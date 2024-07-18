import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {TextField} from "@mui/material";
import Card from "@mui/material/Card";
import React, {useRef, useState} from "react";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const loraList = [
    {value: 'fantasy', label: 'fantasy'},
    {value: 'china', label: 'china'},
] as const;


function LoraCard() {
    return (
        <CardContent>
            <Grid md={4} sm={6} xs={12}>
                <InputLabel>Lora</InputLabel>
                <Select label="Lora" name="Lora" variant="outlined" fullWidth>
                    {loraList.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
        </CardContent>
    )
}

export default function Lora() {

    return (
        <Card>
            <CardHeader title="Add Lora" />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button variant="contained">Add Lora</Button>
            </CardActions>
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
                        <TextField sx={{mt:2}} id="strength1" label="Strength" variant="outlined" fullWidth />
                        <TextField sx={{mt:2}} id="clip1" label="Clip" variant="outlined" fullWidth />
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
                        <TextField sx={{mt:2}} id="strength2" label="Strength" variant="outlined" fullWidth />
                        <TextField sx={{mt:2}} id="clip2" label="Clip" variant="outlined" fullWidth />
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
                        <TextField sx={{mt:2}} id="strength3" label="Strength" variant="outlined" fullWidth />
                        <TextField sx={{mt:2}} id="clip3" label="Clip" variant="outlined" fullWidth />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}