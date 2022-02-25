import React, { useState }  from "react";
import { memberGrade } from "../api";
import Layout from "../containers/Layout";

export default function Grade (){
    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs;

    const handleChange = (e) =>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const gradeRequest = {name, kor, eng, math}
        memberGrade(gradeRequest).then(res=>{alert(res.data)})
        .catch(err => console.log(`에러발생 : ${err}`))
    }
    
    /**const result =() => {
        let name = document.getElementById('name').value
        let kor = document.getElementById('kor').value
        let eng = document.getElementById('eng').value
        let math = document.getElementById('math').value
        setName(name)
        setEng(eng)
        setKor(kor)
        setMath(math)

    }*/

    return <Layout><h1>성적표</h1>
            
                 <div>
                 </div>
                 <div>
                  <label htmlFor=""><b>이름</b></label><br/>   
                  <input name = 'name' type="text" onChange={handleChange} /><br/>
                  <label htmlFor=""><b>언어점수</b></label><br/>
                  <input name = 'kor' type="text" onChange={handleChange}/><br/>
                  <label htmlFor=""><b>영어점수</b></label><br/>
                  <input name = 'eng' type="text" onChange={handleChange}/><br/>
                  <label htmlFor=""><b>수학점수</b></label><br/>
                  <input name = 'math' type="text" onChange={handleChange}/><br/>
                  
                  <button onClick={handleClick}>성적 결과</button>
                  <div>{name} {kor},{eng},{math}</div>            
        </div>    
    
</Layout>
}
