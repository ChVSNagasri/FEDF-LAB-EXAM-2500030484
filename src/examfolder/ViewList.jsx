import { useEffect, useState } from "react";

export default function ViewRegisters(){

  const [users,setUsers] = useState([]);

  useEffect(()=>{

    const storedUsers = JSON.parse(localStorage.getItem("userData"));

    if(Array.isArray(storedUsers)){
      setUsers(storedUsers);
    }else if(storedUsers){
      setUsers([storedUsers]); 
    }else{
      setUsers([]);
    }

  },[]);

  return(

    <div>

      <h2>Registered Users</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Product</th>
            <th>Color</th>
              <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>

        {users.length === 0 ? (
          <tr>
            <td colSpan="5">No Users Registered</td>
          </tr>
        ) : (

          users.map((user,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.product}</td>
               <td>{user.quantity}</td>
              <td>{user.color}</td>
              <td>{user.location}</td>
            </tr>
          ))

        )}

        </tbody>

      </table>

    </div>

  );
}