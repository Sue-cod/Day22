// srcTable.js
import React, { Component } from 'react';
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
            </tr>
        </thead>
    )
}// Add TableHeader arrow function here
// src/Table.js
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
            </tr>
        );
    }); 
    return <tbody>{rows}</tbody>;
}
// Add TableBody arrow function here
class Table extends Component {
    render() {
        const {characterData} = this.props; // Add this line
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} /> 
                </table>
        )
    }
}
export default Table;