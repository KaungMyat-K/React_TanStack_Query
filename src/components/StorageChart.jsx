import { Box, Stack, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts";

export default function StorageChart() {
  return (
   <>
      <Box sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
     >
          <Typography sx={{ fontWeight: "bold" }}>
          Storage
        </Typography>
        <Typography sx={{ fontWeight: "medium" }}>
          Usage: 9000 GB / 10000 GB
        </Typography>
      </Box>
      <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin:0,
            paddingBottom:1.5
              }}
      >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
            <Gauge width={200} height={100} value={60} startAngle={-90} endAngle={90} />
          </Stack>
      </Box>
   </>
  )
}
