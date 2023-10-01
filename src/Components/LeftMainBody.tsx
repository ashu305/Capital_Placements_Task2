import { Box, Typography, styled } from "@mui/material";
import React, { ReactNode, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import { filterOptions } from "../Data/Data";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const LeftMainBody = () => {
  const [filtersSelected, setFiltersSelected] = useState([]);
  const getFilterOptions = () => {
    let filters: ReactNode[] = [];
    filterOptions.forEach((option) => {
      filters.push(
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "3rem",
              borderBottom: option.id !== 5 ? "1px solid #adadad" : "",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.3rem",
                cursor: "pointer",
              }}
            >
              <TextSnippetOutlinedIcon
                sx={{
                  fontSize: "1.3rem",
                  color: "#505050",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                  color: "#505050",
                }}
              >
                {option.value}
              </Typography>
            </Box>
            <KeyboardArrowDownOutlinedIcon
              sx={{
                fontSize: "1.3rem",
                color: "#505050",
                cursor: "pointer",
              }}
            />
          </Box>
        </>
      );
    });
    return filters;
  };
  return (
    <Wrapper>
      <SearchBar>
        <SearchOutlinedIcon
          sx={{
            color: "#939191",
            fontSize: "1.5rem",
          }}
        />
        <input
          type="text"
          placeholder="Serach by name, edu, exp or #tag"
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            height: "100%",
            fontSize: "1rem",
            color: "#0f0f0f",
          }}
        />
        <ErrorOutlineOutlinedIcon
          sx={{
            color: "#939191",
            fontSize: "1.5rem",
          }}
        />
      </SearchBar>
      <FilterWrapper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "3rem",
            width: "100%",
            borderBottom: "1px solid #adadad",
          }}
        >
          <Typography variant="h6">Filters</Typography>
          <Typography>{filtersSelected.length} selected</Typography>
        </Box>

        {getFilterOptions()}
      </FilterWrapper>
    </Wrapper>
  );
};

export default LeftMainBody;

const Wrapper = styled(Box)({
  width: "40rem",
  display: "flex",
  flexDirection: "column",
  borderRadius: "5rem",
});

const SearchBar = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "2rem",
  backgroundColor: "#fff",
  borderRadius: "0.6rem",
  padding: "0 1rem",
});

const FilterWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  padding: "0 1rem",
  marginTop: "1rem",
});
