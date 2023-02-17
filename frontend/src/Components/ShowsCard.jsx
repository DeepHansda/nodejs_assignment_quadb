import { Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

function ShowsCard({ show }) {
  const navigate = useNavigate()
  return (
    <Box onClick={()=>navigate(`/show-details/${show?.id}`)} sx={{ width: "fit-content", background: "#181818",cursor:"pointer" }}>
      <Paper sx={{ backgroundColor: "#0f0f0f" }} variant="elevation" elevation={5}>
        <Box width="100%" height="fit-content">
          <img
            src={show?.image?.medium}
            alt="img"
            style={{ maxWidth: "100%" }}
          />
        </Box>
        <Box sx={{ width: "100%", padding: "10px" }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            // textAlign="center"
            color="white"
          >
            {show?.name}
          </Typography>
          <Typography variant="body1" color="white">
            {show?.language}
          </Typography>

          {show?.rating?.average && (
            <Rating
              precision={0.5}
              value={show?.rating?.average}
              max={10}
              readOnly
              size="small"
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default ShowsCard;
