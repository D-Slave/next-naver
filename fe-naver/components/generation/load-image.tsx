'use client'
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import React, {useEffect, useRef, useState} from "react";
import {ImageList, ImageListItem} from "@mui/material";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function LoadImage() {
    const [ images, setImages ] = useState<string[]>([]);
    const fileRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        fileRef?.current?.click();
    }
    const handleChange = (e: React.ChangeEvent) => {
        const targetFiles = (e.target as HTMLInputElement).files as FileList;
        const targetFilesArray = Array.from(targetFiles);
        const selectedFiles: string[] = targetFilesArray.map((file)=> {
            return URL.createObjectURL(file);
        });
        console.log('files',selectedFiles);
        setImages((prev: any) => prev.concat(selectedFiles));
    }
    return (
        <Card>
            <CardHeader title="load image" />
            <Divider />
            <CardContent>
                <Grid container spacing={6} wrap="wrap">
                    <Grid md={2} sm={6} xs={12}>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput type="file" onClick={handleClick} onChange={handleChange} ref={fileRef} />
                            {/*<input type="file" ref={handleFileUpload} />*/}
                        </Button>
                    </Grid>
                    <Grid md={10} sm={6} xs={12}>
                        <ImageList sx={{
                            width: 500,
                            height: 500}} cols={1}>
                            {images.map((image, index) => (
                                <ImageListItem key={image}>
                                    <img
                                        src={image}
                                        alt={`image${index}`}/>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}