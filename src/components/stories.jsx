import { useState, useEffect } from "react";

export const ArticleStories = () =>{
    
    let api_key = 'qo1jrguXRBWlhYdOVAGPYRnUNPsOfzay';

    let [category, setCategory] = useState("sports");
    let [categoryData, setCategoryData] = useState([]);

    async function getCategory(){
        await fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${api_key}`)
        .then((response) => response.json())
        .then((data) => {
            setCategoryData(data.results)
        });
    }

    useEffect(() => {
        getCategory();
    }, [category])


    return(
        <div className="Top-stories">
        <div className="Top-story-header">
            <h1>News</h1>
        </div>
            <div className="buttons">
                <button onClick={() => setCategory('arts')}>arts</button>
                <button onClick={() => setCategory('business')}>business</button>
                <button onClick={() => setCategory('food')}>food</button>
                <button onClick={() => setCategory('fashion')}>Fashion</button>
                <button onClick={() => setCategory('movies')}>movies</button>
                <button onClick={() => setCategory('sports')}>Sports</button>
                <button onClick={() => setCategory('technology')}>Technology</button>
                <button onClick={() => setCategory('world')}>world</button>
            </div>
            <div className="stories">
                <div className="Top-stories-content">
                {categoryData.map((data, index) =>{
                    return <div key={index} className="story-content-grid">
                        <span id = 'section'>{data.section}</span>
                        <img src= {data.multimedia[1].url}  type = {data.multimedia[0].type}/>
                        <h1>{data.title}</h1>
                        <p>{data.abstract}</p>
                        <a href= {data.short_url} id = 'link'>Read More <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    </div>
                })}
                </div>
            </div>
        </div>
    )
}