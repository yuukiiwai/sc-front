const SiteAbout:React.FC = () =>{
    return(
        <div className="accordion appexp bg-light" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    このサイトについて
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <ol>
                        <li>ゲーム・アプリのタイトルを入力します。</li>
                        <li>システム要件を満たすグラフィックカードのリストが出ます。</li>
                        <li>サイドバーのオプションを追加するとより詳しく検索できます。</li>
                    </ol>
                    </div>
                </div>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    注意事項
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p>当サイトのスクレイピングを禁止します。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteAbout;