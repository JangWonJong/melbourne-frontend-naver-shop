import React from 'react'
import Layout from '../containers/Layout'

export default function Login () {
    return <Layout><h1>로그인폼</h1>
            <form>
                <div>
                </div>
                <div>
                    <label htmlFor=""><b>Username</b></label><br/>
                    <input type="text" placeholder='아이디'/><br/>
                    <label htmlFor=""><b>Password</b></label><br/>
                    <input type="password" placeholder='비밀번호' maxlength="5"/><br/>
                    <button>로그인</button><br/>                    
                </div>                
            </form>
    </Layout>
}
