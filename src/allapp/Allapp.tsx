import axios from "axios";
import React, { useEffect, useState } from "react";
import { homeprops } from "../homefun/Homefun";

const Allapp:React.FC<homeprops> = (props:homeprops) => {
    const url = props.hosturl+"/api/v1/devicesearch/apps/";
    const [apps,setApps] = useState(Array<string>);
    //let apps:Array<string> = [];
    useEffect(() => {
        axios.get(url)
        .then(res => {
        const data = res.data;
        const appData = data.apps;
        setApps(appData);
        })
    },[]);
    
    return(
        <div className="main">
            <h1 className="center-h">対応アプリケーション一覧</h1>
            <ul className="list-group">
                {apps.map((app:string,key)=>{
                    return(
                        <li className="list-group-item fs-3" key={key}>{app}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Allapp;