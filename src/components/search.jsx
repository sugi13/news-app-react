import '../App.css';
import { useState} from 'react';



export const ArticleSearch = () =>{

let apiKey = 'qo1jrguXRBWlhYdOVAGPYRnUNPsOfzay';

const [FindArticle, setFindArticle]  = useState([]);
const [inputValue, setInputValue] = useState('');

 async function searchData(){
    await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputValue}&api-key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
        setFindArticle(data.response.docs);
        console.log(data.response.docs);
    });
 }


    return(
        <div className="search-component">
            <div className="nav">
                <div className="header">
                    <h1>News</h1>
                </div>
                <div className="input-field">
                    <input type="text" placeholder= 'e.g: Tesla' onChange={(e) => setInputValue(e.target.value)} />
                    <button onClick={() => searchData()}>search</button>
                </div>
            </div>
            <div className="search-result">
            {FindArticle.map((article, index) => {
                return <div key = {index} className='search-grid'>
                <h1>{article.headline.main}</h1>
                <p>{article.abstract}</p>
            <a href= {article.web_url} id = 'link'>Read More <ion-icon name="chevron-forward-outline"></ion-icon></a>
                </div>
            })}
            </div>
        </div>
    )
}

