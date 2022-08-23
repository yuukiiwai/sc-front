import React, { useState } from "react";
import AppExp from "./AppEXP";

interface props{
    displayflag:boolean,
    next:()=>void,
}

const TableExp:React.FC<props> = (props:props) =>{
    return(
        <div>
            {props.displayflag && 
            <div id="overlay">
                <div className="tableexp-highlite"></div>
                <div className="tableexp-text">
                    <p>入力したアプリに適合する
                        <br/>グラフィックカードを表示</p>
                </div>
                <div className="orver-next-t" onClick={props.next}>
                    <i className="ph-caret-circle-right"/>
                </div>
            </div>
            }
        </div>
    )
}

export default TableExp;