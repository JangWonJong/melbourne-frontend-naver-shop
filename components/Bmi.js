import React, { useState }  from "react";
import Layout from "../containers/Layout";
import {memberBmi} from '../api/index'


export default function Bmi () {
    const[inputs, setInputs] =useState({})
    const { name, weight, height } = inputs; // Object Destructuring
           
    
    const handleChange = (e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }

    const handleClick =  (e) => {
        e.preventDefault()
        const bmiRequest = {name, weight, height}
        console.log(`사용자이름: ${JSON.stringify(bmiRequest)}`)
        memberBmi(bmiRequest) 
        .then( res=> {
            alert(res.data)
        })       
        .catch( err => console.log(`에러발생 : ${err}`))
        
    }     
    return<Layout>
        <form>
        <h1>BMI</h1>
            
                <div>
                </div>
                <div>
                    <label htmlFor=""><b>name</b></label><br/>
                    <input type="text" name="name" onChange={handleChange} /><br/>                    
                                        

                    <label htmlFor=""><b>height</b></label><br/>                    
                    <input type="text" name="height" onChange={handleChange} /><br/>  

                    <label htmlFor=""><b>weight</b></label><br/>                  
                    <input type="text" name="weight" onChange={handleChange} /><br/>  
                                                         
                    <button onClick={handleClick}>BMI 체크</button><br/> 

                </div>
                </form>
        </Layout>
}
