import React, { useState }  from "react";
import Layout from "../containers/Layout";

export default function Grade (){
    const [name, setName] = useState("")
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)    
    const [math, setMath] = useState(0)
    
    const result =() => {
        let name = document.getElementById('name').value
        let kor = document.getElementById('kor').value
        let eng = document.getElementById('eng').value
        let math = document.getElementById('math').value
        setName(name)
        setEng(eng)
        setKor(kor)
        setMath(math)

    }

    return <Layout><h1>성적표</h1>
            
                 <div>
                 </div>
                 <div>
                  <label htmlFor=""><b>이름</b></label><br/>   
                  <input id = 'name' type="text" /><br/>
                  <label htmlFor=""><b>언어점수</b></label><br/>
                  <input id = 'kor' type="text" /><br/>
                  <label htmlFor=""><b>영어점수</b></label><br/>
                  <input id = 'eng' type="text" /><br/>
                  <label htmlFor=""><b>수학점수</b></label><br/>
                  <input id = 'math' type="text" /><br/>
                  
                  <button onClick={()=>{result()}}>성적 결과</button>
                  <div>{name} {kor},{eng},{math}</div>            
        </div>    
    
</Layout>
}
