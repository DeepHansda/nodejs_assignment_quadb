import { Chip, Container, Rating, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useLazyGetShowsQuery
} from "../Redux/slices/apiSlice";
import Spinner from "./Spinner/Spinner";
function ShowDetails() {
  const [trigger, { data, isFetching }] = useLazyGetShowsQuery();
  const { id } = useParams();
  const show = data?.find((item) => item?.show?.id == id)?.show;

  useEffect(() => {
    trigger();
  }, []);

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <div>
      <Container>
        <Box sx={{ position: "relative" }}>
          <img
            src={show?.image?.original}
            alt={show?.name}
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "500px",
              bottom: 0,
              background: "linear-gradient(to bottom, #00000000, #181818)",
            }}
          ></Box>
        </Box>
        <Stack direction={{xs:'column',md:'row'}} spacing={6} my={6}>
          <Box flex="30%">
            <img
              src={show?.image?.original}
              alt={show?.name}
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box flex="70%">
            <Stack direction={{xs:'column',md:'row'}} spacing={2}>
              <Stack p={4} spacing={1} sx={{ background: "#000" }}>
                <Typography variant="h2" color="white" fontWeight="bold">
                  {show?.name}
                </Typography>
                <Typography variant="h4" color="white">
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
                <Stack
                  alignItems="center"
                  direction="row"
                  flexWrap="wrap"
                  spacing={1}
                >
                  {show?.genres?.map((gen, index) => (
                    <Chip label={gen} key={index} sx={{ background: "#fff" }} />
                  ))}
                </Stack>
              </Stack>

              <Stack p={4} sx={{ background: "#000" }} spacing={1}>
                <Typography
                  variant="body1"
                  color="white"
                >{`Premiered On : ${show?.premiered}`}</Typography>
                <Typography
                  variant="body1"
                  color="white"
                >{`Status : ${show?.status}`}</Typography>

                <Typography
                  variant="body1"
                  color="white"
                >{`Run Time : ${show?.averageRuntime} Minutes`}</Typography>
                <Typography
                  variant="body1"
                  color="white"
                >{`Country: ${show?.network?.country?.name}`}</Typography>
                <Typography
                  variant="body1"
                  color="white"
                >{`Channel : ${show?.network?.name}`}</Typography>
                <Typography
                  variant="body1"
                  color="white"
                >{`Premiere Time : ${show?.schedule?.time}`}</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  flexWrap="wrap"
                >
                  <Typography variant="body1" color="white">
                    Premiere Days :
                  </Typography>
                  <Box>
                    {show?.schedule?.days?.map((day, index) => (
                      <Chip
                        label={day}
                        key={index}
                        sx={{ background: "#fff" }}
                      />
                    ))}
                  </Box>
                </Stack>
              </Stack>
            </Stack>
            <Box sx={{ mt: 2, background: "#000", color: "#fff", p: 4 }}>
              <div dangerouslySetInnerHTML={{ __html: show?.summary }}></div>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default ShowDetails;
