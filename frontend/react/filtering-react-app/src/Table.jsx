import React from 'react'

const  Table = ({data}) =>
  (
    <table>
        <tbody>
            <tr className='thead'>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
           {
            data.map((item)=>(
                <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
            </tr>
            ))}
        </tbody>
    </table>
  );

export default Table