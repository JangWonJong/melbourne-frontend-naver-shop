import React, { useState }  from "react"
import Layout from "../containers/Layout"

export default function Calc (){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [result, setResult] = useState(0)
    const sum = () => {
        return setResult (Number(num1) + Number(num2))
    }
    
    return<Layout><h1>계산기</h1>
           <div>
                </div>
                <div>
                    <label htmlFor=""><b>num1</b></label><br/>               
                    <input id ="num1" type="" /><br/>

                    <label htmlFor=""><b>opcode</b></label><br/>
                    <select name="" id="">
                        <option value="">+</option>
                        <option value="">-</option>
                        <option value="">*</option>
                        <option value="">/</option>
                        <option value="">%</option>
                    </select>
                    <br/>
                    <label htmlFor=""><b>num2</b></label><br/>
                    <input id ="num2" type="" /><br/>
                    
                    <button onClick={()=>{setNum1(document.getElementById('num1').value)}}>숫자1결정</button><br/>                   
                    <button onClick={()=>{setNum2(document.getElementById('num2').value)}}>숫자2결정</button><br/>
                    <button onClick={()=>{sum()}}>opcode실행</button><br/>

                    <div>결과:{num1} + {num2} = {result} </div>                 
                </div>
           
    
    </Layout>
}
