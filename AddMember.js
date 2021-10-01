// import {useState} from 'react';
import { Select, Table } from "@mui/material";
import DateBox from "./DateBox";
import SelectBox from "./SelectBox";
import TextArea from "./TextArea";
import './AddMember.css';
import Button from '@mui/material/Button';
// import MemberTable from './MemberTable';




const AddMember = () => {
    // const[table, setTable]= useState([
    //     {name:'program start date' ,name1:'program end date'},
    //     {name:'Alternate Phone',name1:'Alternate Email'},
    //     {name:'Goals', name1:'status'}
    // ]);

    return ( 
        <div className="add-mem">
            {/* <MemberTable table={table}/> */}
            <Table>
                <tr>
                    <td>Program Start Date</td>
                    <td>Program end Date</td>
                </tr>
                <tr>
                    <td> <DateBox/></td>
                    <td> <DateBox/></td>               
                </tr>
                <tr className="head">
                    <td>Alternative Phone</td>
                    <td>Alternative email</td>
                </tr>
                <tr>
                    <td><TextArea/></td>
                    <td><TextArea/></td>
                </tr>
                <tr className="goal">
                    <td>Goals</td>
                    <td>Status</td>
                </tr>
                <tr>
                    <td> <SelectBox/></td>
                    <td> <SelectBox/></td>               
                </tr>
                <tr>
                    <td>Vitals Threshold Values</td>
                </tr>
                <tr>
                    <td>Comments</td>
                </tr>
            </Table> 
            <div>
            <textarea className="textarea">Comments...</textarea>
            </div>
            <div className="butn">
                <Button variant="contained">Add</Button>
                <Button>Cancel</Button>
            </div>
        </div>
     );
}
 
export default AddMember;


