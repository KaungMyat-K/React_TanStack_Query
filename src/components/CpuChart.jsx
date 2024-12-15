import { Box, Stack, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts";

export default function CpuChart() {

  
  return (
    <>
      <Box sx={{ margin:2,width:'50%'}}>
        <Typography sx={{ margin: 0, fontWeight: "bold" }}>CPU</Typography>
        <Typography sx={{ margin: 0, fontWeight: "medium" }}>Usage: 90% / 100%</Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection:"row-reverse",
          justifyContent:'center',
          alignItems:'center',
          paddingBottom:0.5
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
        <Gauge width={150} height={100} value={60} />
        </Stack>
        
      </Box>
    </>
  )
}

