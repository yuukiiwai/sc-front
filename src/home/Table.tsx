import axios from "axios";
import React,{FC, useState} from "react";
import { Link } from "react-router-dom";
import { gra } from "../sch/GraTable";
import PrCard from "./prCard";

interface Props{
    origin:string
}

const Table:FC<Props> = (props:Props) => {
    const url = props.origin + "/api/v1/devicesearch/recommend?t=g&r=2"
    const [data,setData] = useState<Array<gra>>([]);
    React.useEffect(()=>{
        let newdata:Array<gra> = [];
        axios.get(url)
        .then(res => {
            const data = res.data;
            const graData = data.gra_list;
            for(let i=0;i<20;i++){
                let newgra:gra = {
                    id:graData[i].id,
                    name:graData[i].name,
                    url:graData[i].url,
                    directx:graData[i].directx,
                    gpu:graData[i].gpu,
                    interface:graData[i].interface,
                    manufacture:graData[i].manufacture,
                    opengl:graData[i].opengl,
                    img_url:graData[i].img_url
                }
                newdata.push(newgra)
            }
            setData(newdata);
        });
    },[]);
    console.log(data);
    return(
        <div className="row row-cols-1 row-cols-5 g-4 textcenter">
            {data.map((item,key)=>{
                return( 
                    <div className="col" key={key}>
                        <Link to={"/sch/detail/"+item.id} target="_blank">
                            <PrCard 
                                id={item.id}
                                name={item.name}
                                img_url={item.img_url}
                            />
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Table;