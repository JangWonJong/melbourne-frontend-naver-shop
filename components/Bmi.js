import React, { useState }  from "react";
import Layout from "../containers/Layout";

export default function Bmi () {
    const [name, setName] = useState("")
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    return<Layout><h1>BMI</h1>
            <form>
                <div>
                </div>
                <div>
                    <label htmlFor=""><b>name</b></label><br/>
                    <input type="text" /><br/>
                    <label htmlFor=""><b>height</b></label><br/>
                    <input type="text" /><br/>
                    <label htmlFor=""><b>weight</b></label><br/>
                    <input type="text" /><br/>
                    <button>결과</button>
                </div>
            </form>
        </Layout>
}
