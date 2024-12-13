import { DescriptionOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function DashBoardPage() {
  return (
    <>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4, // Spacing between sections
        p: 3,
        maxWidth: "1500px", // Limit the max container width
        margin: "0 auto", // Center the container
      }}
    >
      {/* First Section */}
      <Box
        sx={{
          backgroundColor: "#ededed",
          padding: 2,
          borderRadius: 2,
          textAlign: "center",
          boxShadow: 1,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
          Dashboard
        </Typography>
      </Box>

      {/* Second Section */}
      <Box
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          sx={{
            marginBottom: 3,
            textAlign: "left",
            fontSize: 25,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Performance
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            padding: 2,
            "&::-webkit-scrollbar": {
              height: "8px",
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
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Card
              key={num}
              sx={{
                flex: "1 1 200px", // Responsive size
                maxWidth: "250px", // Limit card width
                height: 200,
                boxShadow: 3,
                borderRadius: 2,
                flexShrink: 0,
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 5,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Card {num}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This is card number {num}. Add your content here.
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Third Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <Card
            key={num}
            sx={{
              flex: "1 1 200px", // Responsive size
              maxWidth: "220px", // Control card width
              height: 120,
              boxShadow: 3,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffffff",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 4,
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#e0f2f1",
                  borderRadius: "50%",
                  width: 48,
                  height: 48,
                  boxShadow: 2,
                }}
              >
                <DescriptionOutlined sx={{ fontSize: 28, color: "#00796b" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                Option {num}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    </>
  )
}
