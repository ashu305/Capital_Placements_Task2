import { styled, Box, Avatar, IconButton } from "@mui/material";
import React, { ReactNode, useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { SidebarIcons } from "../Enums/SidebarEnum";

const IconsList = {
  top: [
    {
      name: SidebarIcons.HOME,
      icon: <HomeOutlinedIcon />,
    },
    {
      name: SidebarIcons.FORUM,
      icon: <GroupsOutlinedIcon />,
    },
    {
      name: SidebarIcons.CALENDAR,
      icon: <EventAvailableOutlinedIcon />,
    },
    {
      name: SidebarIcons.SHARE,
      icon: <ShareOutlinedIcon />,
    },
    {
      name: SidebarIcons.FAVORITE,
      icon: <FavoriteBorderOutlinedIcon />,
    },
    {
      name: SidebarIcons.SAVE,
      icon: <DescriptionOutlinedIcon />,
    },
  ],
  bottom: [
    {
      name: SidebarIcons.SETTINGS,
      icon: <SettingsOutlinedIcon />,
    },
    {
      name: SidebarIcons.ACCOUNT,
      icon: (
        <Avatar
          sx={{
            width: ["2rem"],
            height: ["2rem"],
            fontSize: ["1rem"],
            backgroundColor: "#B1CDFD",
            color: "#000",
          }}
        >
          AS
        </Avatar>
      ),
    },
  ],
};

const Sidebar = () => {
  const [currentOpen, setCurrentOpen] = useState<SidebarIcons>(SidebarIcons.HOME);

  const getSideBarIcons = (pos: string) => {
    let res: ReactNode[] = [];
    if (pos === "top") {
      IconsList.top.map((icon) => {
        res.push(
          <MyIconButton
            sx={
              currentOpen === icon.name
                ? {
                    backgroundColor: "#1d77d852",
                    color: "#1084ffdf",
                    borderRadius: "0.5rem",
                    "&:hover": {
                      backgroundColor: "#1d77d852",
                      color: "#1084ffdf",
                    },
                  }
                : {}
            }
            onClick={() => setCurrentOpen(icon.name)}
          >
            {icon.icon}
          </MyIconButton>
        );
      });
    } else {
      IconsList.bottom.map((icon) => {
        res.push(<MyIconButton>{icon.icon}</MyIconButton>);
      });
    }
    return res;
  };
  return (
    <Wrapper
      sx={{
        height: "100%",
        width: ["3.5rem"],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "1rem",
          marginTop: "4rem",
        }}
      >
        {getSideBarIcons("top")}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {getSideBarIcons("bottom")};
      </Box>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  background: "#fff",
  justifyContent: "space-between",
  alignItems: "center",
});

const MyIconButton = styled(IconButton)({
  "&:hover": {
    background: "none",
  },
});
