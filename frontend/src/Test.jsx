import React, {useEffect, useState} from "react";
import axios from "axios";

function Test(props){
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get('/test')
            .then((req)=>{
                const {data} = req; //이 data는 지역변수다
                // console.log(data); //얘는 const state꺼다.
                setData(data); //data를 넣어준다.
            })
            .catch((err)=>{
                console.log("통신 시 오류가 발생했습니다.");
            })
    }, []); //뒤에 빈 배열있으면 동작 한 번 만 한다.



    return(
        <div>
            <h2>스프링 프로젝트 안에서 동작하는 리액트</h2>
            <ul>
                {
                    data.map((item,index)=>{
                        return <li key = {index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}
export default Test;