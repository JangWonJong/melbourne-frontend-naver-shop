import React, { useState }  from "react"
import { memberCalc } from "../api";
import Layout from "../containers/Layout"

export default function Calc (){

    const [inputs, setInputs] = useState({})
    const [result, setReult] = useState('')
    const {num1,  opcode, num2} = inputs;

    const handleChange = (e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick =(e) =>{
        e.preventDefault()
        memberCalc({num1, opcode, num2}).then(res => setReult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
    
    }  
        
    return<Layout><h1>계산기</h1>
        <form action="">
                
                    <label htmlFor=""><b>num1</b></label><br/>               
                    <input name="num1" type="text" onChange={handleChange} /><br/> 

                    <label htmlFor=""><b>opcode</b></label><br/>
                    <select name="opcode" id="" onChange={handleChange}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                        <option value="%">%</option>
                    </select><br/>
                    
                    <label htmlFor=""><b>num2</b></label><br/>
                    <input name="num2" type="text" onChange={handleChange} /><br/> 

                    <button onClick={handleClick}>전 송</button><br/>
                    <div>계산 결과: {result} </div>
                    </form>
                                     
                           
            
    
    </Layout>
}
