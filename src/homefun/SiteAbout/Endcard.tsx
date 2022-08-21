import React, { useState } from "react";

interface props{
    displayflag:boolean,
    next:()=>void
}

const Endcard:React.FC<props> = (props:props) =>{
    return(
        <div>
            {props.displayflag && 
            <div id="overlay" >
                <div className="overendtext">
                    <h1>検索を開始</h1>
                </div>
                <div className="orver-next" onClick={props.next}>
                    {">"}
                </div>
            </div>
            }
        </div>
    )
}

export default Endcard;