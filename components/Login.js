import React, { useState } from 'react'
import Layout from '../containers/Layout'

export default function Login () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = () =>{
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        setUsername(username)
        setPassword(password)

    }

    return <Layout><h1>로그인폼</h1>
           
                <div>
                </div>
                <div>
                    <label htmlFor=""><b>Username</b></label><br/>
                    <input id = 'username' type="text" placeholder='아이디'/><br/>
                    <label htmlFor=""><b>Password</b></label><br/>
                    <input id ='password' type="password" placeholder='비밀번호' maxlength="5"/><br/>
                    
                    <button onClick={()=>{login()}}>로그인</button><br/>    
                    
                    <div>로그인성공{username}{password}</div>                
                </div>                
            
    </Layout>
}
