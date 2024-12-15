import { Box, Stack, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts";

export default function CpuChart() {

  
  return (
    <>
     <Box sx={{ margin:2}}>
          <Typography sx={{ margin: 0, fontWeight: "bold" }}>CPU</Typography>
      </Box>
      <Box
          sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              }}
      >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
            <Gauge width={100} height={100} value={60} startAngle={-90} endAngle={90} />
          </Stack>
      </Box>
    </>
  )
}

