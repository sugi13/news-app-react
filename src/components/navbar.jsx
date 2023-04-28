import '../App.css';
import { Home } from './Home';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="layout">
            <div className="nav">
                <div className="nav-brand">
                    <h1>News</h1>
                </div>
                <div className="nav-link">
                    <li>
                        <Link to = '/' className='link'>Home <ion-icon name="home-outline"></ion-icon></Link>
                    </li>
                    <li>
                        <Link to = '/stories' className='link'>Stories <ion-icon name="book-outline"></ion-icon></Link>
                    </li>
                    <li>
                        <Link to = '/search' className='link'>Search<ion-icon name="search-outline"></ion-icon></Link>
                    </li>
                </div>
            </div>
            <Home/>
        </div>
    )
}

