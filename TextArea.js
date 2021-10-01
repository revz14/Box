import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextArea() {
  return (
    // <Box
    //   component="form"
    //   sx={{
    //      m: 1, width: '25ch' 
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
      <TextField id="standard-basic"  variant="filled"  style={{ width: 300 , height:6}} />
    // </Box>
  );
}
