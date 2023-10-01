import React from "react";
import "./App.css";
import { Box, styled } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import LeftMainBody from "./Components/LeftMainBody";
import RightMainBody from "./Components/RightMainBody";
const App = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingLeft: "2rem",
          paddingRight: "1rem",
          paddingTop: "1.4rem",
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            marginTop: "1rem",
            gap: "3rem",
            overflow: "hidden",
          }}
        >
          <LeftMainBody />
          <RightMainBody />
        </Box>
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
