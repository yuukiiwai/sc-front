import React from "react";


const SiteAbout:React.FC = () =>{
    return(
        <div className="accordion appexp bg-light" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {">"}このサイトについて
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <ol>
                        <li>ゲーム・アプリのタイトルを入力します。（英数字のみ対応です。）</li>
                        <li>システム要件を満たすグラフィックカードのリストが出ます。</li>
                        <li>サイドバーのオプションを追加するとより詳しく検索できます。</li>
                    </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteAbout;