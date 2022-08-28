import React from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const Nav:React.FC = () =>{
    const rule = () => {
        swal({
            title:"禁止事項",
            icon:"info",
            text:"当サイトへのスクレイピングを禁止します。"
        });
    }
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light fix-bar'>
            <div className='container-fluid'>
                <Link to={"/"} className='navbar-brand' >
                    <img src='/saiteki_grabo.png' alt='タイトル' 
                    height="50"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                <div className="navbar-nav">
                    <li className='nav-item'>
                        <Link to={'/sch/'} className="nav-link" aria-current="page">グラフィックカード検索</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to={'/allapp/'} className="nav-link">登録アプリ一覧</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to={'/allgra/'} className="nav-link">登録グラフィックカード一覧</Link> 
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={()=>{rule()}}>利用規約</span>
                    </li>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;