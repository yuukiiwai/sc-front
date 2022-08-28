import React,{FC} from "react"
import { Link } from "react-router-dom";
import PrCard from "../home/prCard";

export interface gratableprops{
    list : Array<gra>,
}

export interface gra{
    id:number,
    name:string,
    url:string,
    directx:string,
    opengl:string,
    manufacture:string,
    interface:string,
    gpu:string,
    img_url:string
}

const GraTable:FC<gratableprops> = (props:gratableprops) => {
    return(
        <div className="box">
            <p>検索結果 <span className="bigtext">{props.list.length}</span> 件</p>
            <div className="row row-cols-1 row-cols-5 g-4 textcenter">
                {props.list.map((gra:gra,key)=>{
                    return(
                        <div className="col" key={key}>
                            <Link to={"/sch/detail/"+gra.id} target="_blank">
                                <PrCard
                                    id = {gra.id}
                                    name= {gra.name}
                                    img_url={gra.img_url}
                                />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default GraTable;