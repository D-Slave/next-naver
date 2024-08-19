import { Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const loraList = [
  { value: "fantasy", label: "fantasy" },
  { value: "china", label: "china" },
] as const;

export default function LoraCard() {
  const [loraBox, setLoraBox] = useState({
    select: "",
    strength: "",
    clip: "",
  });

  return (
    <Grid md={4} sm={6} xs={12}>
      <InputLabel>Lora</InputLabel>
      <Select
        value={loraBox.select}
        label="Lora"
        name="Lora"
        onChange={(e) => {
          setLoraBox((el) => {
            return {
              ...el,
              select: e.target.value,
            };
          });
        }}
        variant="outlined"
        fullWidth
      >
        {loraList.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <TextField
        value={loraBox.strength}
        sx={{ mt: 2 }}
        id="strength"
        label="Strength"
        variant="outlined"
        onChange={(e) => {
          const strength = e.currentTarget?.value;
          setLoraBox((el) => {
            return {
              ...el,
              strength,
            };
          });
        }}
        fullWidth
      />
      <TextField
        value={loraBox.clip}
        sx={{ mt: 2 }}
        id="clip"
        label="Clip"
        variant="outlined"
        onChange={(e) => {
          setLoraBox((el) => {
            const clip = e.currentTarget?.value;
            return {
              ...el,
              clip,
            };
          });
        }}
        fullWidth
      />
    </Grid>
  );
}
