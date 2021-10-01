import React,{useState} from 'react';
import Modal from 'react-modal';
import SearchBox from './SearchBox';

const AddPatient =()=>{
    const [modalOpen , setModalOpen] = useState(false);
    return(
        
        <div>
            <button variant="contained" onClick= {()=> setModalOpen(true)}>Add Patients</button>
            <Modal isOpen={modalOpen}>
            <SearchBox></SearchBox>
            </Modal>
        </div>
    );
}

export default AddPatient;

