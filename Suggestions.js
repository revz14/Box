import React from 'react';
import styles from './Suggestions.module.css';


export default function Suggestions(props) {
    const suggs = props.results.map((data, index) => {
        return <div className={styles.empdata} key={index} onClick={() => { props.update(data.name, data.dob) }}>
            <tr className={styles.tab}>
                <td>{data.name}</td>
            </tr>
            <tr className={styles.data}>
                <td>DOB:{data.dob}</td>
                <td>age:{data.age}</td>
                <td>Phone:{data.Phone_Number}</td>
            </tr>
        </div>
    })
    return (
        <div className={styles.suggestions}>
            {suggs}
        </div>
    );
}