import { Box, Typography } from "@mui/material";
import { GaugeContainer, GaugeReferenceArc, GaugeValueArc, useGaugeState } from "@mui/x-charts";



function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

export default function MemoryChart() {

  
  return (
    <>
    <Box sx={{ margin:2}}>
              <Typography sx={{ margin: 0, fontWeight: "bold" }}>Memory</Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                <GaugeContainer
                width={200}
                height={200}
                startAngle={-110}
                endAngle={110}
                value={30}
                >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer />
                </GaugeContainer>
      </Box>
    </>
  )
}
