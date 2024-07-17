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

// // const [preview, setPreview] = useState<string | null>("");
// const [images, setImages] = useState<string[]>([]);
// const handleFileUpload = () => {
//     // if (e.target.files !== null) {
//     //     const file = e.target.files[0];
//     //     if (file && file.type.substring(0, 5) === "image") {
//     //         setImgFile(file);
//     //     } else {
//     //         setImgFile(null)
//     //     }
//     // }
//
//     const fileRef = useRef<HTMLInputElement>(null);
//     const handleChange = (e: React.ChangeEvent) => {
//         const targetFiles = (e.target as HTMLInputElement).files as FileList;
//         const targetFilesArray = Array.from(targetFiles);
//         const selectedFiles: string[] = targetFilesArray.map((file)=> {
//             return URL.createObjectURL(file);
//         });
//         setImages((prev)=> prev.concat(selectedFiles));
//     }
//     return (
//         <>
//             {images.map((url, i)=> (
//                 <div key={url}>
//                     <input src={url} alt={`image${i}`}
//                 </div>
//             ))}
//         </>
//     );
// };
//
// const handleClick = () => {
//     fileRef?.current?.click();
// }


// useEffect(()=> {
//     if (imgFile) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setPreview(reader.result as string);
//         };
//         reader.readAsDataURL(imgFile);
//     } else {
//         setPreview(null);
//     }
// }, [imgFile]);

export default function LoadImage() {
    return (
        <Card>
            <CardHeader title="load image" />
            <Divider />
            <CardContent>
                <Grid container spacing={6} wrap="wrap">
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file"/>
                        {/*<input type="file" ref={handleFileUpload} />*/}
                    </Button>
                    {/*<img src={preview as string}  alt=""/>*/}
                </Grid>
            </CardContent>
        </Card>
    )
}