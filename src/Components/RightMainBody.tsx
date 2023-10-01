import { Box, IconButton, Typography, styled } from "@mui/material";
import React, { ReactNode, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { CandidatesList, candidatesHeaders } from "../Data/Data";
import Candidate from "./Candidate";

const RightMainBody = () => {
  const [selectedCandidates, setSelectedCandidates] = useState<Array<Number>>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState(1);

  const getHeader = () => {
    let headers: ReactNode[] = [];
    const keys = Object.keys(candidatesHeaders);
    const values = Object.values(candidatesHeaders);
    for (let i = 1; i < keys.length; i++) {
      const key = keys[i];
      const value = values[i];
      headers.push(
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              flexDirection: "row",
              gap: "1rem",
              marginRight: "2rem",
              cursor: "pointer",
            }}
            onClick={() => setSelectedHeader(i)}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "1.2rem",
                color: selectedHeader === i ? "primary.main" : "#000",
              }}
            >
              {key}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: selectedHeader === i ? "primary.main" : "#000",
                backgroundColor: selectedHeader === i ? "#4ca1f14b" : "#9e9e9e55",
                borderRadius: "1rem",
                padding: "0.3rem",
              }}
            >
              {value}
            </Typography>
          </Box>
        </>
      );
    }
    return headers;
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCandidates([]);
      setSelectAll(false);
    } else {
      setSelectedCandidates(CandidatesList.map((_, index) => index));
      setSelectAll(true);
    }
  };

  const renderCandidates = () => {
    return CandidatesList.map((candidate, index) => {
      return (
        <Candidate
          key={index}
          candidateDetails={candidate}
          selectedCandidates={selectedCandidates}
          setSelectedCandidates={setSelectedCandidates}
        />
      );
    });
  };
  return (
    <Wrapper>
      <Header>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => handleSelectAll()}
            sx={{
              transition: "all 0.5s ease",
            }}
          >
            {selectAll ? (
              <CheckBoxIcon
                sx={{
                  color: "primary.main",
                }}
              />
            ) : (
              <CheckBoxOutlineBlankIcon
                sx={{
                  color: "primary.main",
                }}
              />
            )}
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              ml: 1,
              fontWeight: 600,
              color: "primary.main",
              fontSize: "1.2rem",
            }}
          >
            {candidatesHeaders.totalCandidates} Candidates
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {getHeader()}
        </Box>
      </Header>
      <hr
        style={{
          width: "100%",
          height: "0.04rem",
          backgroundColor: "#cbcbcb",
        }}
      />
      {renderCandidates()}
    </Wrapper>
  );
};

export default RightMainBody;

const Wrapper = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const Header = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  padding: "1rem",
});
