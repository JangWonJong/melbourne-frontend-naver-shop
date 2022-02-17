import React from "react";
import Layout from "../containers/Layout";

export default function Grade (){
    return <Layout><h1>성적표</h1>
            <form>
                 <div>
                 </div>
                 <div>
                  <label htmlFor=""><b>이름</b></label><br/>   
                  <input type="text" /><br/>
                  <label htmlFor=""><b>언어점수</b></label><br/>
                  <input type="text" /><br/>
                  <label htmlFor=""><b>영어점수</b></label><br/>
                  <input type="text" /><br/>
                  <label htmlFor=""><b>수학점수</b></label><br/>
                  <input type="text" /><br/>
                  <button>결과값</button>            
        </div>    
    </form>
</Layout>
}
