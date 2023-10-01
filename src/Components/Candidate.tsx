import { Avatar, Box, Chip, IconButton, Typography, styled } from "@mui/material";
import React, { ReactNode } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { CandidateDetails } from "../Interfaces/CandidateDetails";
interface Props {
  selectedCandidates: Number[];
  setSelectedCandidates: (candidate: Number[]) => void;
  candidateDetails: CandidateDetails;
}
const Candidate: React.FC<Props> = ({
  selectedCandidates,
  setSelectedCandidates,
  candidateDetails,
}) => {
  const isSelected = (id: Number) => {
    return selectedCandidates.includes(id);
  };
  const handleSelectCandidate = () => {
    let state = [...selectedCandidates];
    if (!isSelected(candidateDetails.id)) {
      state.push(candidateDetails.id);
    } else {
      state = state.filter((candidate) => candidate !== candidateDetails.id);
    }
    setSelectedCandidates(state);
  };
  const renderHashTags = () => {
    let component: ReactNode[] = [];
    let i = 0;
    if (candidateDetails.hashTags.length > 0) {
      candidateDetails.hashTags.forEach((hashTag) => {
        component.push(
          <Typography
            key={i}
            sx={{
              color: "primary.main",
              fontSize: "0.9rem",
            }}
          >
            {hashTag}
          </Typography>
        );
        i++;
      });
    }

    return component;
  };
  const renderMoreDetails = () => {
    let component: ReactNode[] = [];
    let i = 0;
    if (candidateDetails.moreDetails.length > 0) {
      candidateDetails.moreDetails.forEach((moreDetail) => {
        component.push(
          <Typography
            key={i}
            sx={{
              color: "#037092",
              fontSize: "0.9rem",
              backgroundColor: "#F3FAFC",
              padding: "0.2rem 0.8rem",
              borderRadius: "0.9rem",
            }}
          >
            {moreDetail}
          </Typography>
        );
        i++;
      });
      return component;
    }
  };
  return (
    <>
      <Wrapper>
        <IconButton onClick={() => handleSelectCandidate()}>
          {isSelected(candidateDetails.id) ? (
            <CheckBoxIcon
              sx={{
                color: "primary.main",
              }}
            />
          ) : (
            <CheckBoxOutlineBlankIcon />
          )}
        </IconButton>
        <Avatar
          sx={{
            width: 50,
            height: 50,
            bgcolor: "#EDF4FF",
            color: "#D0E1FF",
          }}
        >
          AS
        </Avatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#000000",
              width: "100%",
              height: "100%",
            }}
          >
            {candidateDetails.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#555555",
              width: "100%",
              height: "100%",
            }}
          >
            {candidateDetails.location}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#555555",
              width: "100%",
              height: "100%",
            }}
          >
            {candidateDetails.degree}-{candidateDetails.University}
            {"("}
            {candidateDetails.startYear}-{candidateDetails.endYear}
            {")"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              gap: "0.5rem",
            }}
          >
            {renderHashTags()}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              gap: "1rem",
              marginTop: "0.6rem",
            }}
          >
            {renderMoreDetails()}
          </Box>
        </Box>
      </Wrapper>
      <hr
        style={{
          width: "100%",
          height: "0.004rem",
          backgroundColor: "#cbcbcb",
          marginTop: "0.8rem",
        }}
      />
    </>
  );
};

export default Candidate;

const Wrapper = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: "1.2rem",
  gap: "1rem",
  marginLeft: "1rem",
});
