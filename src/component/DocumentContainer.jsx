import { useState } from "react";
import { Grid } from "@mui/material";
import FormDropBox from "./dropbox/FormDropBox";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";

export default function DocumentContainer() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid item container spacing={1} justifyContent="center">
        <Grid item lg={6} sm={8} md={6} xs={12}>
          <div>
            <FormDropBox
              paraText1={"Drop the files here ..."}
              paraText2={"Drop Images here, or Browse"}
            />
          </div>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center" spacing={3}>
        <Grid item lg={3} sm={4} md={3} xs={12}>
          <Box mb={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
          <FormControl fullWidth>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} sm={4} md={3} xs={12}>
          <Box mb={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
          <FormControl fullWidth>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
