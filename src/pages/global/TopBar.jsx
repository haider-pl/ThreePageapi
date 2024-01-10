import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from "react";

function TopBar(){
    const [isSidebar, setIsSidebar] = useState(false);

    return(
<header className="header" isSidebar={isSidebar} >

<div className="menu-icon">
<Button >
    <MenuOutlinedIcon className="icon" style={{ color: 'gray' }}/>
    </Button >
</div>
<div className="header-left">

<Button >
    <SearchIcon className="icon" />

    </Button >

</div>
<div className="header-right">
<Menu>

    <Button >
        <NotificationsActiveIcon style={{ color: 'black' }}/>
        </Button>
   
        <Button><MailOutlineTwoToneIcon style={{ color: 'black' }}/> </Button>
       
        <Button>
<AccountCircleIcon style={{ color: 'black' }}/>
        </Button>
   
 

    </Menu>
    <Menu>

    </Menu>
</div>

</header>

    )
}

export default TopBar;