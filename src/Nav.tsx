import React from "react";
import { Link } from "react-router-dom";

const Nav:React.FC = () =>{
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light fix-bar'>
            <div className='container-fluid'>
                <a href="/" className='navbar-brand' >
                    <img src='/satisfactionconfigure.jpg' alt='タイトル' 
                    height="50"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                <div className="navbar-nav">
                    <li className='nav-item'>
                        <Link to={'/'} className="nav-link" aria-current="page">検索ページ</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to={'/allapp/'} className="nav-link">登録アプリ一覧</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to={'/allgra/'} className="nav-link">登録グラフィックカード一覧</Link> 
                    </li>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;