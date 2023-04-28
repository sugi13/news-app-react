import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/navbar';
import { ArticleStories } from './components/stories';
import { ArticleSearch } from './components/search';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Navbar/>} />
        <Route path= 'Home' element = {<Home/>} />
        <Route path= 'stories' element = {<ArticleStories/>} />
        <Route path= 'search' element = {<ArticleSearch/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


// key = 'qo1jrguXRBWlhYdOVAGPYRnUNPsOfzay';