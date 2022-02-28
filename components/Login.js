import React, { useState } from 'react'
import { memberLogin } from '../api/';
import Layout from '../containers/Layout'

export default function Login () {
  
    const [inputs, setInputs] = useState({})
    const {id, pw} = inputs;

    const handleChange =(e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...setInputs, [name]: value})    
    }
    const handleClick =(e)=> {
        e.preventDefault()
        const loginRequest = {id, pw}
        memberLogin(loginRequest)
        .then(res => {
            alert(res.data)
        })
        .catch(err => console.log(`에러발생 : ${err}`))
    }
    
    return <Layout><h1>로그인폼</h1>
           
                <div>
                </div>
                <div>
                    <label htmlFor=""><b>Username</b></label><br/>
                    <input name='id' type="text" placeholder='아이디' onChange={handleChange}/><br/>
                    <label htmlFor=""><b>Password</b></label><br/>
                    <input name ='pw' type="password" placeholder='비밀번호' onChange={handleChange}/><br/>
                    
                    <button onClick={handleClick}>로그인</button><br/>    
                                                        
                </div>                
            
    </Layout>
}
