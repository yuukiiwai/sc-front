import axios from "axios";
import React, { useEffect, useState } from "react";
import { homeprops } from "../homefun/Homefun";

const Allgra:React.FC<homeprops> = (props:homeprops) => {
    const url = props.hosturl+"/api/v1/devicesearch/gras/";
    const [gras,setApps] = useState(Array<string>);
    useEffect(() => {
        axios.get(url)
        .then(res => {
        const data = res.data;
        const graData = data.gras;
        setApps(graData);
        })
    },[]);
    
    return(
        <div className="main">
            <h1 className="center-h">対応グラフィックカード一覧</h1>
            <ul className="list-group">
                {gras.map((gra:string,key)=>{
                    return(
                        <li className="list-group-item fs-3" key={key}>{gra}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Allgra;