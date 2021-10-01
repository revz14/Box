import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddMember from './AddMember';
import './AddMember.css';
import SearchBox from './SearchBox';

export default function TabsBox() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  return (
    <div>
       
      <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab  label="Search Patient" value="1" />
           
            <Tab  label="Add Patient" value="2" />
           
          </TabList>
        <TabPanel className="tabs" value="1"><SearchBox/></TabPanel>
        <TabPanel className="tabs" value="2"><AddMember/></TabPanel>
      </TabContext>
      </div>
  );
}
