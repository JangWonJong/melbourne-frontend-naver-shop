import React from "react";
import Layout from "../containers/Layout";

export default function Bmi () {
    return<Layout><h1>BMI</h1>
            <form>
                <div>
                </div>
                <div>
                    <label htmlFor=""><b>이름</b></label><br/>
                    <input type="text" /><br/>
                    <label htmlFor=""><b>키</b></label><br/>
                    <input type="text" /><br/>
                    <label htmlFor=""><b>몸무게</b></label><br/>
                    <input type="text" /><br/>
                    <button>결과</button>
                </div>
            </form>
        </Layout>
}
