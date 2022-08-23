import axios from "axios";
import React,{FC, useState} from "react";
import { gra } from "../sch/GraTable";

interface Props{
    origin:string
}

const Table:FC<Props> = (props:Props) => {
    const url = props.origin + "/api/v1/devicesearch/recommend?t=g&r=2"
    const [data,setData] = useState<Array<gra>>([]);
    const colum:Array<string> = [
        "製品名",
        "製造",
        "インターフェース",
        "GPU",
        "DirectX",
        "OpenGL",
        "公式ページ",
        "amazon"
    ];
    React.useEffect(()=>{
        let newdata:Array<gra> = [];
        axios.get(url)
        .then(res => {
            const data = res.data;
            const graData = data.gra_list;
            for(let i=0;i<20;i++){
                let newgra:gra = {
                name:graData[i].name,
                url:graData[i].url,
                directx:graData[i].directx,
                gpu:graData[i].gpu,
                interface:graData[i].interface,
                manufacture:graData[i].manufacture,
                opengl:graData[i].opengl
                }
                newdata.push(newgra)
            }
            setData(newdata);
        });
    },[]);
    return(
        <div className="textcenter">
            <table className="table table-striped">
                <thead>
                    <tr>
                    {
                        colum.map((item,key)=>{
                            return(
                                <th scope="col" key={key}>{item}</th>
                            );
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {data.map((gra:gra,key)=>{
                        return(
                            <tr key={key}>
                                <th className="col-md-4">
                                    {gra.name}
                                </th>
                                <th className="col-md-1">
                                    {gra.manufacture}
                                </th>
                                <th className="col-md-2">
                                    {gra.interface}
                                </th>
                                <th className="col-md-2">
                                    {gra.gpu}
                                </th>
                                <th className="col-md-1">
                                    {gra.directx}
                                </th>
                                <th className="col-md-1">
                                    {gra.opengl}
                                </th>
                                <th className="col-md-2">
                                    <a target={"_blank"} rel={"noopener noreferrer"} href={gra.url}>公式ページ</a>
                                </th>
                                <th className="col-md-1">
                                    <a target={"_blank"} rel={"noopener noreferrer"} href={"https://www.amazon.co.jp/s?k="+gra.name}>
                                    <i className="fa-brands fa-amazon"></i>
                                    </a>
                                </th>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;