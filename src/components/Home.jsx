import '../App.css';
import { useState, useEffect } from "react";


 // API key
let apiKey = 'qo1jrguXRBWlhYdOVAGPYRnUNPsOfzay';

export const Home = () => {

   const [ApiData, SetApiData] = useState([]);
   async function fetchData(){
   await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
    .then((res) => res.json())
    .then((data) =>{
        SetApiData(data.results)
    })
    }

    useEffect(() =>{
        fetchData();
    },[])

    return (
    <div className="home">
        <div className="content">
        {ApiData.map((data, index) => {
        return <div key = {index} className="home-content-grid">
            <span id = 'section'>{data.section}</span>
            <h1>{data.title}</h1>
            <p>{data.abstract}</p>
            <a href= {data.short_url} id = 'link'>Read More <ion-icon name="chevron-forward-outline"></ion-icon></a>
        </div>
        })}
        </div>
    </div>
    )
}