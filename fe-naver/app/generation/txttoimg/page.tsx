"use client";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { TextToImagePrompt } from "@/components/generation/txttoimg/Prompt";
import Card from "@mui/material/Card";
import Lora from "@/components/generation/txttoimg/Lora";
import ControlNet from "@/components/generation/controlnet";
import LoadImage from "@/components/generation/load-image";
import IpAdaptor from "@/components/generation/ipadaptor";
import Box from "@mui/material/Box";
import { FormEvent } from "react";
import axios, { Axios } from "axios";

const generateImage = async (data: any) => {
  const client: Axios = axios.create({
    // baseURL: process.env.REACT_APP_URL,
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/json",
    },
  });

  await client
    .post("/api/image/text", data)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function Page() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      positive: data.get("Positive"),
      negative: data.get("Negative"),
      checkPoint: data.get("CheckPoint"),
      // lora: data.get('Lora'),
    });

    generateImage(data);
  };
  return (
    <Stack spacing={3}>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <TextToImagePrompt />
          </Grid>
          <Grid xs={12}>
            <Lora />
          </Grid>
          <Grid xs={12}>
            <ControlNet />
          </Grid>
          <Grid xs={12}>
            <LoadImage />
          </Grid>
          <Grid xs={12}>
            <IpAdaptor />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
