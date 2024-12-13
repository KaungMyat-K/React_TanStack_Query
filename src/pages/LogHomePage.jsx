import { Box, Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Paper, Select, Typography } from '@mui/material';
import { useState } from 'react';
import LogTable from '../components/LogTable';
import { useTheme } from '@emotion/react';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];





export default function LogHomePage() {
  const theme = useTheme();
    const [personName, setPersonName] = useState('');
    const [open, setOpen] = useState(false);
  
    const handleChange = (event) => {
      const { target: { value } } = event;
      setPersonName(value);
      setOpen(false);
    };
  


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          minHeight: "100vh",
        }}
      >
      {/* Page Header */}
      <Typography
        sx={{
          backgroundColor: "#ededed",
          padding: 2,
          textAlign: "left",
          borderRadius: 2,
        }}
      >
        Log
      </Typography>

      {/* Form Section */}
      <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    Filters
  </Typography>
  <Button
    variant="contained"
    size="small"
    onClick={() => console.log("Clear Button Clicked")}
  >
    Clear
  </Button>
  </Box>
        <Grid container spacing={3}>
          {["Client", "Project", "Method", "Status", "Start Date", "End Date"].map(
            (label, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FormControl fullWidth variant="outlined" size="small">
  <InputLabel>{label}</InputLabel>
  <Select
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput label={label} />}
    MenuProps={{
      PaperProps: {
        style: {
          maxHeight: 200, // Max height for the dropdown
          overflowY: "auto", // Enables vertical scrollbar
        },
      },
    }}
  >
    {names.map((name) => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
</FormControl>
              </Grid>
            )
          )}
        </Grid>
      </Paper>
    <LogTable/>
  </Box>
      
    </>
  )
}



