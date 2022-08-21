import React, { useState } from "react";

interface props{
    displayflag:boolean,
    next:()=>void
}

const AppExp:React.FC<props> = (props:props) =>{
    return(
        <div>
            {props.displayflag && 
            <div id="overlay" >
                <div className="appexp-highlite">
                </div>
                <div className="appexp-text">
                    <p>使いたいゲームやアプリの名前を入力</p>
                </div>
                <div className="orver-next" onClick={props.next}>
                    {">"}
                </div>
            </div>
            }
        </div>
    )
}

export default AppExp;