import { Box, IconButton, Typography, styled, Collapse, Slide } from "@mui/material";
import { HeaderData } from "../Data/Data";
import React, { ReactNode, useState } from "react";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreOutlinedIcon from "@mui/icons-material/MoreOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Icons = [
  <MoreOutlinedIcon
    sx={{
      fontSize: "1rem",
    }}
  />,
  <PersonOffOutlinedIcon
    color="error"
    sx={{
      fontSize: "1rem",
    }}
  />,
  <PersonAddAltOutlinedIcon
    sx={{
      fontSize: "1rem",
    }}
  />,
  <RecordVoiceOverOutlinedIcon
    sx={{
      fontSize: "1rem",
    }}
  />,
  <EmailOutlinedIcon
    sx={{
      fontSize: "1rem",
    }}
  />,
];

const Header = () => {
  const [selectedDropdown, setSelectedDropdown] = useState(3);
  const [openDropDown, setOpenDropDown] = useState(false);

  const getIcons = () => {
    let icons: ReactNode[] = [];
    Icons.forEach((element) => {
      icons.push(
        <IconButton
          sx={{
            backgroundColor: "#fff",
            borderRadius: "0.3rem",
            color: "#626262",

            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
            },
          }}
        >
          {element}
        </IconButton>
      );
    });
    return icons;
  };

  const getDropDownList = () => {
    let dropDownList: ReactNode[] = [];
    HeaderData.dropDownOptions.forEach((element) => {
      dropDownList.push(
        <Box
          key={element.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              cursor: "pointer",
              backgroundColor: selectedDropdown === element.id - 1 ? "#EDF2FF" : "#fff",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                textAlign: "center",
                margin: "1rem",
                color: selectedDropdown === element.id - 1 ? "#1D4ED8" : "#000",
              }}
            >
              {element.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: selectedDropdown === element.id - 1 ? "#1D4ED8" : "#000",
                textAlign: "center",
                margin: "1rem",
                backgroundColor: selectedDropdown === element.id - 1 ? "#D1DDFF" : "#cfcfcf5f",
                padding: "0.1rem",
                borderRadius: "0.8rem",
              }}
            >
              {element.notifications}
            </Typography>
          </Box>
          {element.id !== 9 && (
            <hr
              style={{
                backgroundColor: "#ffffff",
              }}
            />
          )}
        </Box>
      );
    });
    return dropDownList;
  };

  return (
    <Wrapper>
      <Box>
        <MyHeading variant="h6">{HeaderData.heading}</MyHeading>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#0B0B0B",
          }}
        >
          {" "}
          {HeaderData.location}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MyDropdownContainer
          sx={{
            width: "20rem",
            height: "1.6rem",
            transition: "all 0.6s ease",
            "&:active": {
              color: "#fff",
              backgroundColor: "#5aa6f773",
            },
          }}
          onClick={() => setOpenDropDown(!openDropDown)}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all 0.5s ease",
              "&:active": {
                color: "#fff",
              },
            }}
          >
            <Typography
              sx={{
                color: "#1D4ED8",
                cursor: "pointer",
                "&:active": {
                  color: "#fff",
                },
              }}
            >
              {HeaderData.dropDownOptions[selectedDropdown].name}
            </Typography>

            <KeyboardArrowDownOutlinedIcon
              sx={{
                color: "#1D4ED8",
                fontSize: "1rem",
                marginRight: "0.2rem",
                cursor: "pointer",
              }}
            />
          </Box>
        </MyDropdownContainer>
        <Collapse
          in={openDropDown}
          sx={{
            position: "absolute",
            top: "3.2rem",
            zIndex: "10",
          }}
        >
          <MyDropdown
            sx={{
              width: "21rem",
              height: "fit-content",
              borderRadius: "1.6rem",
              transition: "all 0.5s ease",
            }}
          >
            {getDropDownList()}
          </MyDropdown>
        </Collapse>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        {getIcons()}
        <MyButton
          sx={{
            width: ["9rem"],
            fontSize: ["1rem"],
            height: ["2.6rem"],
            letterSpacing: "0.1rem",
          }}
        >
          Move To Video Interview
        </MyButton>
        <MoreIconButton
          sx={{
            fontSize: ["1.3rem"],
            height: ["2.6rem"],
            width: ["3rem"],
          }}
        >
          <KeyboardArrowDownOutlinedIcon />
        </MoreIconButton>
      </Box>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
});

const MyHeading = styled(Typography)({
  fontWeight: "bold",
  color: "#1D4ED8",
});

const MyButton = styled(Box)({
  backgroundColor: "#1D5ECD",
  color: "#fff",
  borderRadius: "0.8rem 0 0 0.8rem",
  display: "flex",
  justifyContent: "flex-start",
  padding: "0 0.5rem",
  alignItems: "center",
  gap: "0.5rem",
  transition: "all 0.5s ease",
  overflow: "hidden",
  whiteSpace: "nowrap",
  cursor: "pointer",
  zIndex: 20,
  borderRight: "3px solid #fff",
  "&:hover": {
    backgroundColor: "#1D4ED8",
  },
  "&:active": {
    backgroundColor: "#7796e9",
  },
});

const MoreIconButton = styled(IconButton)({
  backgroundColor: "#1D5ECD",
  color: "#fff",
  borderRadius: "0 0.8rem 0.8rem 0",
  display: "flex",
  justifyContent: "center",
  padding: "0 0.5rem",
  marginLeft: "-0.9rem",
  zIndex: 10,
  borderLeft: "3px solid #000",
  "&:hover": {
    backgroundColor: "#1D4ED8",
  },
  "&:active": {
    backgroundColor: "#1D4ED8",
  },
});

const MyDropdownContainer = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "0.8rem",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  transition: "all 0.5s ease",
});

const MyDropdown = styled(Box)({
  display: "flex",
  marginTop: "1rem",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.5rem",
  transition: "all 0.5s ease",
  backgroundColor: "#fff",
});
