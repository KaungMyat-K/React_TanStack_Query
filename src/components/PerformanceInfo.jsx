import { Box, Divider, Typography } from "@mui/material";

export default function PerformanceInfo() {
  return (
    <>
      <Box
      elevation={3}
      sx={{
        margin: 2,
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontWeight: "bold",
          marginBottom: 1,
          color: "#333",
        }}
      >
        Details
      </Typography>
    
      {/* Scrollable Content */}
      <Box
        sx={{
          maxHeight: "400px", 
          overflowY: "auto", 
          borderRadius:2,
          paddingRight: 1, 
          "&::-webkit-scrollbar": {  //scroll bar
              height: "8px",
              width: '6px'
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#e0e0e0",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#bababa",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#949292",
              },
            },
        }}
      >
        {/* CPU Section */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "Bold", marginTop: 1}}
        >
          CPU
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: 2 }}>
          Core: 8
        </Typography>

        <Divider />

        {/* Storage Section */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold",  marginTop: 2 }}
        >
          Storage
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          Name: C:
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          Available Storage: 3GB
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          Used Storage: 4GB
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: 2 }}>
          Total Storage: 8GB
        </Typography>

        <Divider />

        {/* RAM Section */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#555", marginTop: 2 }}
        >
          RAM
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          Available Storage: 3GB
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          Used Storage: 4GB
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: 2 }}>
          Total Storage: 8GB
        </Typography>

        <Divider />

        {/* Network Section */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#555", marginTop: 2 }}
        >
          Network
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          Name: Intel
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          Manufacturer: Dell
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          OS: Windows 10 Pro
        </Typography>
      </Box>
    </Box>
    </>
  )
}
