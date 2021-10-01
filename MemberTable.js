import { Table } from "@mui/material";

const MemberTable = ({table}) => {
    return (  
        <div>
            {table.map((data)=>(
                <div>
                    <Table>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.name1}</td>
                        </tr>
                    </Table>
                </div>
            ))}
        </div>
        
    );
}
 
export default MemberTable;