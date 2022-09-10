import React,{FC, useState} from "react";
import { useNavigate } from "react-router-dom";

interface cardprops{
    id:number,
    name:string,
    img_url:string,
}

const PrCard:FC<cardprops> = (props:cardprops) => {
    return(
        <div className="card h100">
            <img src={props.img_url} alt={"グラフィックカード:"+props.name+"のイメージ"} 
            className="card-imt-top ___card-img"/>
            <div className="card-body">
                <p className="card-title ___card-txt">{props.name}</p>
            </div>
        </div>
    );
}

export default PrCard;