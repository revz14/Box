import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import './DateBox.css';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';




export default function DateBox() {

  const [value, setValue] = React.useState(new Date());

    return (
    <div className="date-pick">
        <div className="d">
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <Stack spacing={10}>
          <DatePicker
            views={['day']}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) =><TextField  sx={{
              width: 300,
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
              },
            }}className="root" variant="filled" {...params} helperText={null}/>}
          />
        </Stack>
      </LocalizationProvider>
      </div>
      </div>
  );
}
