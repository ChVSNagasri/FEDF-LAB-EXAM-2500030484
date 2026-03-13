import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './table.css'
export default function ApiData()
 {
    const [data,setData]=useState([])
    const [error,setError]=useState("")
    const displayData=async ()=>{
        try
        {
       const response=await axios.get("https://dummy-json.mock.beeceptor.com/posts") 
           setData(response.data)
        } 
        
        catch (error) 
        {
           setError(error.message) 
        }
    }

    useEffect(() => {
        displayData()
    }, []);
  return (
   
    <div>
           
      {
        error?<b>{error}</b>:
        data.length==0?<strong>Loading...................</strong>:
        <table border={10} bgColor='bisque'>
            <tr>
                <th>USER ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Link</th>
                <th>Comment Count</th>
              
            </tr>
             {
            data.map((post,index)=>(
            <tr key={index}>
                <td>{post.userId}</td>
               <td>{post.id}</td>
               <td>{post.title}</td>
               <td>{post.body}</td>
               <td>{post.link}</td>
               <td>{post.comment_count}</td>
            </tr>
            ) )
        }
        </table>
      }    
      <h1> Length of the Given Data:{data.length}</h1> 
    </div>
  )
}