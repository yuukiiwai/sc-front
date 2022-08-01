const Nav:React.FC = () =>{
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light fix-bar'>
            <div className='container-fluid'>
                <a href="/" className='navbar-brand' >
                    <img src='satisfactionconfigure.jpg' alt='タイトル' 
                    height="50"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                <div className="navbar-nav">
                    <li className='nav-item'>
                    <a className='nav-link active' aria-current="page" href='#'>一括検索</a>
                    </li>
                    <li className='nav-item'>
                    <a className='nav-link' href='#'>登録アプリ一覧</a>
                    </li>
                    <li className='nav-item'>
                    <a className='nav-link' href='#'>メモリ（開発中）</a>
                    </li>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;