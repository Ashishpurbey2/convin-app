import React from 'react'
import { useState } from 'react';
import axios from "axios"

function Register() {
   const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
   });

const register=async()=>{
    try{
        const response = await axios.post("/api/users/register",user);
        if(response.data.success){
            alert("User registerd successfully");
        }else{
            alert(response.data.message);
        }
    }catch(error){
        console.log(error);
    }
}

  return (
    <div className='min-h-screen flex items-center justify-center'  >
      <div className='flex flex-col gap-3 w-100 p-3 shadow border border-grey-500'>
        <h1 className='text-3xl font-bold text-gray-700'>Welcome To Convin Music App</h1>
        <hr/>
        <input type="text" placeholder="Name"  
            value={user.name} 
            onChange={(e)=>setUser({...user,name:e.target.value})}
        />
        <input type="text" placeholder="Email"
             value={user.email} 
             onChange={(e)=>setUser({...user,email:e.target.value})}
        />
        <input type="text" placeholder="Password"
            value={user.password} 
            onChange={(e)=>setUser({...user,password:e.target.value})}
        />
        <button className='primary border-l-0' onClick={register}  >Register</button>
      </div>
    </div>
  )
}

export default Register

// import React from 'react'

// function Register() {
//   return (
//     <div>
//       register
//     </div>
//   )
// }

// export default Register

