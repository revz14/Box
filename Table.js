import React from 'react';
import styles from './Table.module.css';

export default function Table(props){
    const data = props.results.map((d,index)=>{
        return(
        <div className={styles.cont}>
        <table key = {index}  className = {styles.table}>
                <tr className = {styles.head}>
                    <td colSpan="8">Patient Details</td>
                </tr>
                <tr className={styles.name}>
                <tr>
                    <td>Name: {d.name}</td>
                    <td>Dob: {d.dob}</td>
                    <td>Patient id: {d.patient_id}</td>
                </tr>
                </tr>
                <tr className={styles.gen}>
                <tr>
                    <td>Age:{d.age}</td>
                    <td>Gender: {d.gender}</td>
                    <td>Height: {d.height}</td>
                    <td>Weight: {d.weight}</td>                    
                </tr>
                </tr>
                <tr className={styles.contact}>
                <tr >                
                    <td >Contact Info</td>
                    <td >Care Manager</td>
                </tr>
                </tr>
                <tr className={styles.lang}>
                <tr>
                    <td>Preffered Language: {d.lang}</td>
                    <td>Name: {d.care_name}</td>
                </tr>
                </tr>
                <tr className={styles.email}>
                <tr>
                    <td>Email: {d.email}</td>
                    <td>Email: {d.care_email}</td>
                </tr>
                </tr>
                <tr className={styles.phn}>
                <tr>
                    <td>Phone: {d.phone}</td>
                    <td>Phone: {d.care_phn}</td>
                </tr>
                </tr>
        </table>
        </div>);
    })
    return(
        <div>
            {data}
        </div>           
            
    );
}