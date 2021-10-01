import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './AddMember.css'

export default function SelectBox() {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    
    <form>
    <select id="country" name="country" className="select">
    <option value="au">select</option>
    <option value="ca">option2</option>
    <option value="usa">option3</option>
    </select>
  </form>

      // <FormControl variant="filled" sx={{ m: 1, width:300}} >
      //   <InputLabel id="demo-simple-select-label">Select</InputLabel>
      //   <Select
      //     id="demo-simple-select"
      //     value={age}
      //     label="Select"
      //     onChange={handleChange}
      //   >
      //     <MenuItem value={10}>Ten</MenuItem>
      //     <MenuItem value={20}>Twenty</MenuItem>
      //     <MenuItem value={30}>Thirty</MenuItem>
      //   </Select>
      // </FormControl>
  
  );
}
