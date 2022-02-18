import React, { useState }  from "react";
import Layout from "../containers/Layout";

export default function Bmi () {
    const [name, setName] = useState("")
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)

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
                </div>
           
        </Layout>
}
