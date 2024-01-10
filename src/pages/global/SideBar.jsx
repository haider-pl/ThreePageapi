import React from "react";
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function SideBar(){
    

    return(
      <Box m="20px">
            <Sidebar style={{ height: "100vh" }}>
            <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
  
            style={{ textAlign: "center" }} >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}  href="/">Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}  href="/Team">Team</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />} href="/Calender">Calendar</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />} href="/Contacts">Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />} href="/Profile">Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />} href="/FAQ">FAQ</MenuItem>
    
        </Menu>
                </Sidebar>
                                </Box>

    )
}

export default SideBar;