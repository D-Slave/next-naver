import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import React, { useRef, useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LoraCard from "./ui/LoraCard";
import { Box } from "@mui/system";

const loraList = [
  { value: "fantasy", label: "fantasy" },
  { value: "china", label: "china" },
] as const;

export default function Lora() {
  const [loraArr, setLoraArr] = useState<number[]>([]);

  function handleLoraArr() {
    // 기존 배열을 복사
    const newLoraArr: number[] = [...loraArr];

    // 새로운 배열을 추가하는 로직
    if (loraArr.length === 0) {
      newLoraArr.push(1);
    } else {
      // 기존 배열의 마지막 배열에 다음 숫자를 추가

      newLoraArr.push(newLoraArr.length + 1);
    }

    // 새로운 배열을 상태로 설정
    setLoraArr(newLoraArr);
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
                  <Box width={"100%"} justifyContent="flex-end" display="flex">
                    <Button
                      onClick={() => {
                        const newArr = [...loraArr];
                        newArr.splice(index, 1);
                        setLoraArr(newArr);
                      }}
                      color="error"
                      variant="contained"
                      style={{
                        marginTop: "8px",
                        textAlign: "right",
                        width: "100px",
                      }}
                    >
                      삭제
                    </Button>
                  </Box>
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
