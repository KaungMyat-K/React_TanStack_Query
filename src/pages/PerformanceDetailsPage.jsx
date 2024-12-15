import { Box, Typography } from "@mui/material";
import MemoryChart from "../components/MemoryChart";
import CpuChart from "../components/CpuChart";
import StorageChart from "../components/StorageChart";

export default function PerformanceDetailsPage() {
  return (
    <>
    <Typography sx={{
              backgroundColor : "#ededed",
              padding: 2,
              borderRadius: 2,
              marginBottom:3
        }}>
          Performance Details
        </Typography>
      <Box sx={{
        display:"flex",
        gap:2,
      }}>
        
        <Box sx={{
          width:"70%",
          display:'flex',
          justifyContent:'space-between',
          gap: 2,        
        }}>
          <Box
            sx={{
              width: "50%",
              backgroundColor: "yellow",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
              <MemoryChart />    
          </Box>
          <Box sx={{
            width:'50%',
            display:'flex',
            flexDirection:'column',
            gap:2
          }}>
              <Box sx={{
                width:"100%",
                height:"50%",
                backgroundColor:'blue',
                borderRadius:2
              }}>
              <CpuChart />        
              </Box>
              <Box sx={{
                width:"100%",
                height:"50%",
                backgroundColor:'pink',
                borderRadius:2
              }}>
              <StorageChart />
              </Box>
          </Box>
        </Box>
        <Box sx={{
          width:"30%",
          background:'red',
          borderRadius:2
        }}>2</Box>
      </Box>   
    </>
  )
}
