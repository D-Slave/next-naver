import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import React, { useRef, useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LoraCard from "./ui/LoraCard";

const loraList = [
  { value: "fantasy", label: "fantasy" },
  { value: "china", label: "china" },
] as const;

export default function Lora() {
  const [loraArr, setLoraArr] = useState<number[]>([]);

  function handleLoraArr() {
    setLoraArr([...loraArr, loraArr.length + 1]);
  }
  return (
    <Card>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <CardHeader title="Add Lora" />
        <Button variant="contained" onClick={handleLoraArr}>
          Add Lora
        </Button>
      </CardActions>
      <Divider />
      <CardContent>
        <Grid container spacing={6} wrap="wrap">
          {loraArr.length > 0 ? (
            loraArr.map((item, index) => {
              return (
                <Grid xs={4}>
                  <LoraCard key={index} />
                </Grid>
              );
            })
          ) : (
            <Grid xs={12} textAlign="center" color="gray">
              Lora 를 추가해주세요!
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
