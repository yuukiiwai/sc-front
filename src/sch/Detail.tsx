import axios from "axios";
import React,{FC,useState} from "react";
import { useParams } from "react-router-dom";

interface gbinfo{
    name:string,
    url:string,
    manufacture:string,
    interface:string,
    interface_gen:number,
    interface_shape:string,
    interface_prot:string,
    gpu:string,
    gpu_manufacture:string,
    directx:string,
    opengl:string,
    lowprofile:boolean,
    img_url:string
}

const Detail:FC = () => {
    const id = useParams().id;
    const url = process.env.REACT_APP_API_ORIGIN + "/api/v1/devicesearch/appsat/gra/"+id
    const [gbdata,setData] = useState<gbinfo>({
        name:"",
        url:"",
        manufacture:"",
        interface:"",
        interface_gen:0,
        interface_shape:"",
        interface_prot:"",
        gpu:"",
        gpu_manufacture:"",
        directx:"",
        opengl:"",
        lowprofile:false,
        img_url:"",
    });
    React.useEffect(()=>{
        axios.get(url)
        .then(res=>{
            const data = res.data;
            const t_gbdata = data.gra_info;
            setData(t_gbdata as gbinfo);
        });
    },[]);
    console.log(id);
    return(
        <div className="main textcenter">
        <img className="detail-pic" src={gbdata.img_url} alt={gbdata.name+"のイメージ"} />
        <table className="boxcenter table table-bordered textleft ___table" border={1} >
            <tbody>
                <tr>
                    <td>製品名</td>
                    <td>{gbdata.name}</td>
                </tr>
                <tr>
                    <td>メーカー</td>
                    <td>{gbdata.manufacture}</td>
                </tr>
                <tr>
                    <td>インターフェース表記</td>
                    <td>{gbdata.interface}</td>
                </tr>
                <tr>
                    <td>PCIe世代</td>
                    <td>{gbdata.interface_gen}</td>
                </tr>
                <tr>
                    <td>PCIe x形状</td>
                    <td>{gbdata.interface_shape}</td>
                </tr>
                <tr>
                    <td>PCIe x定義値</td>
                    <td>{gbdata.interface_prot}</td>
                </tr>
                <tr>
                    <td>GPU</td>
                    <td>{gbdata.gpu}</td>
                </tr>
                <tr>
                    <td>GPUメーカー</td>
                    <td>{gbdata.gpu_manufacture}</td>
                </tr>
                <tr>
                    <td>対応DirectXバージョン</td>
                    <td>{gbdata.directx}</td>
                </tr>
                <tr>
                    <td>対応OpenGLバージョン</td>
                    <td>{gbdata.opengl}</td>
                </tr>
                <tr>
                    <td>ロープロファイル</td>
                    <td>{gbdata.lowprofile && "対応"}{!gbdata.lowprofile && "非対応"}</td>
                </tr>
                <tr>
                    <td>公式URL</td>
                    <td><a href={gbdata.url} target="_blank">{gbdata.manufacture}公式サイト</a></td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}

export default Detail;