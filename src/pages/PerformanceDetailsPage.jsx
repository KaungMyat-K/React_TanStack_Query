import { Box } from "@mui/material";

export default function PerformanceDetailsPage() {
  return (
    <>
      <Box sx={{
        display:"flex",
        gap:2,
      }}>
        <Box sx={{
          width:"70%",
          display:'flex',
          justifyContent:'space-between',
          gap: 2
        }}>
          <Box sx={{
            width:'50%',
            backgroundColor:'yellow'
          }}>
              left
          </Box>
          <Box sx={{
            width:'50%',
            backgroundColor:'green'
          }}>
              right
          </Box>
        </Box>
        <Box sx={{
          width:"30%",
          background:'red'
        }}>2</Box>
      </Box>   
    </>
  )
}
