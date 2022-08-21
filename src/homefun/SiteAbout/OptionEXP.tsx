import React, { useState } from "react";

interface props{
    displayflag:boolean,
    next:()=>void
}

const OptionExp:React.FC<props> = (props:props) =>{
    return(
        <div>
            {props.displayflag && 
            <div id="overlay" >
                <div className="optionexp-highlite">
                </div>
                <div className="optionexp-text">
                    <p>
                        お使いのPC環境に合わせるための<br/>
                        オプション検索
                    </p>
                </div>
                <div className="orver-next" onClick={props.next}>
                    {">"}
                </div>
            </div>
            }
        </div>
    )
}

export default OptionExp;