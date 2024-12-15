import { Box, Typography } from "@mui/material";
import MemoryChart from "../components/MemoryChart";
import CpuChart from "../components/CpuChart";
import StorageChart from "../components/StorageChart";
import PerformanceInfo from "../components/PerformanceInfo";

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
              height: 'auto',
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow:2
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
                height:"auto",
                borderRadius:2,
                boxShadow:2,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              }}>
                <StorageChart />   
              </Box>
              <Box sx={{
                width:"100%",
                height:"auto",
                borderRadius:2,
                boxShadow:2,
                display:'flex',
                justifyContent:'space-between'
              }}>
              
              <CpuChart /> 
              </Box>
          </Box>
        </Box>
        <Box sx={{
          width:"30%",
          borderRadius:2,
          boxShadow:2
        }}>
          <PerformanceInfo/>
        </Box>
      </Box>   
    </>
  )
}
