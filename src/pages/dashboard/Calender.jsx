import React from "react";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function Calender(){
   
    return(
        <div style={{width:"1000px"}}>
            <h2>Calender</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar st />
    </LocalizationProvider>
      
      </div>

    )
}

export default Calender;