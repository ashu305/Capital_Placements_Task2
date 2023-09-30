import React from "react";
import "./App.css";
import { Box, styled, Typography } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
const App = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        ></Box>
      </Box>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#D0E1FF",
  display: "flex",
  flexDirection: "row",
});
