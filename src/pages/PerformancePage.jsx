import { Box, Card, CardContent, Typography } from "@mui/material";

export default function PerformancePage() {
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection : "column",
        gap : 2
      }}>
        <Typography sx={{
              backgroundColor : "#ededed",
              padding: 2,
              borderRadius: 2
        }}>
          Performance
        </Typography>
        <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // Allow cards to wrap to the next line
        gap: 4, // Space between cards
        p: 3, // Padding around the container
        backgroundColor: "#f0f0f0", // Light gray background
        borderRadius: 2,
        boxShadow: 1,
        justifyContent: "flex-start", // Center the grid
      }}
    >
      {/* Generate 14 cards */}
      {[...Array(14).keys()].map((num) => (
        <Card
          key={num}
          sx={{
            width: {
              xs: "100%", // Full width on small screens
              sm: "calc(50% - 24px)", // 2 cards per row on small screens
              md: "calc(33.333% - 24px)", // 3 cards per row on medium screens
              lg: "calc(25% - 24px)", // 4 cards per row on large screens
            },
            minWidth: 250,
            height: 200,
            boxShadow: 3,
            borderRadius: 2,
            flexShrink: 0,
            backgroundColor: "#fff", // White background for cards
            transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-8px)", // Lift effect on hover
              boxShadow: 5,
            },
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Card {num + 1}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              This is card number {num + 1}. Add your content here.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
      </Box>
    </>
  )
}
