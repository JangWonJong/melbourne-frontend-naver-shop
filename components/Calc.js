import React from "react"
import Layout from "../containers/Layout"

export default function Calc (){
    return<Layout><h1>계산기</h1>
            <form>
                <div>
                </div>
                <div>
                    <label htmlFor=""><b>숫자</b></label><br/>   
                    <input type="text" /><br/>
                    <label htmlFor=""><b>연산자</b></label><br/>
                    <input type="text" /><br/>
                    <label htmlFor=""><b>숫자</b></label><br/>
                    <input type="text" /><br/>
                    <button>결과값</button>                 
                </div>
            </form>
    
    </Layout>
}
