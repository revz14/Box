import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TabsBox from './Components/TabsBox';

const style = {
  position: 'absolute',
  top: '8%',
  left: '25%',
  height: '100%',
  height: '100%',
  width: '100%',
  maxWidth: 650,
  maxHeight: 600,
  display: 'block',
  borderRadius: '2%',
  bgcolor: 'background.paper',
  boxShadow: 24, 
};

function App() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (


    <div className="App">
      
      <Button variant="contained" sx={{ left: 600 }} onClick={handleOpen}>Add Member</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <div className="head">
            Add Patient to diabetes
        </div> 
        {/* <Box sx={style}> */}
     
        <TabsBox />
        {/* </Box> */}
      </Modal>
    </div>

  );
}

export default App;


