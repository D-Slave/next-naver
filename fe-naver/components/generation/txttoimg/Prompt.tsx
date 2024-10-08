'use client'

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {TextField} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import * as React from "react";

const checkPoint = [
    { value : 'Moyou', label: 'Moyou'},
    { value : 'Asian', label: 'Asian'},
    { value : 'Japan', label: 'Japan'},
] as const;


export function TextToImagePrompt() {

    return (
        <Card>
                <CardHeader title="Text To Image" />
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid md={2} sm={6} xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Check Point Model</InputLabel>
                                <Select label="CheckPoint" name="CheckPoint" variant="outlined">
                                    {checkPoint.map((item) => (
                                        <MenuItem key={item.value} value={item.value}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid md={5} sm={5} xs={12}>
                            <TextField
                                id="Positive"
                                name="Positive"
                                label="Positive"
                                fullWidth
                                multiline
                                rows={3}
                                defaultValue="Positive"
                            />
                        </Grid>
                        <Grid md={5} sm={5} xs={12}>
                            <TextField
                                id="Negative"
                                name="Negative"
                                fullWidth
                                label="Negative"
                                multiline
                                rows={3}
                                defaultValue="Negative"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained" type="submit">Generation</Button>
                </CardActions>
        </Card>
    )
}