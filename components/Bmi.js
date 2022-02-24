import React, { useState }  from "react";
import Layout from "../containers/Layout";
import axios from 'axios';

export default function Bmi () {
    const [name, setName] = useState('')
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const getBmi = async (e) => {
        e.preventDefault()
        alert(`버튼 클릭`)
        try{            
            await axios.get(`http://localhost:8080/member/bmi/홍길동/180.5/80.5`)
            .then((res)=>{
                alert(`답장이 도착했습니다 [내용] ${res}`)
            })

        }catch(error){
            alert(`답장이 도착했습니다`)
        }
    }

    const print = () => {
       let name = document.getElementById('name').value
       let height = document.getElementById('height').value
       let weight = document.getElementById('weight').value
       setName(name)
       setHeight(height)
       setWeight(weight)
    }

    
    return<Layout><h1>BMI</h1>
            
                <div>
                </div>
                <div>
                    <label htmlFor=""><b>name</b></label><br/>                    
                    <input id ="name" type=""/><br/>
                    

                    <label htmlFor=""><b>height</b></label><br/>                    
                    <input id ="height" type=""/><br/>
                    
                    <label htmlFor=""><b>weight</b></label><br/>                    
                    <input id ="weight" type=""/><br/>
                   

                    <button onClick={()=>{print()}}>입력</button>
                    
                    <div>결과:{name}, {height}, {weight}</div>
                    <input type="button" onClick={getBmi} value="BMI 체크"/><br/> 
                </div>
           
        </Layout>
}
