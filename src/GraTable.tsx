import React,{FC} from "react"

export interface gratableprops{
    title:string,
    list : Array<gra>,
}

export interface gra{
    name:string,
    url:string,
    directx:string,
    opengl:string,
    manufacture:string,
    interface:string,
    gpu:string,
}

const GraTable:FC<gratableprops> = (props:gratableprops) => {
    return(
        <div className="outtable box">
            <table className='table table-striped'>
                <thead  className="sticky-top bg-light">
                    <tr >
                        <th scope='col'>{props.title+"("+props.list.length+")"}</th>
                        <th scope="col">製造</th>
                        <th scope="col">インターフェース</th>
                        <th scope="col">GPU</th>
                        <th scope="col">DirectX</th>
                        <th scope="col">OpenGL</th>
                        <th scope="col">公式ページ</th>
                        <th scope="col">amazon</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((gra:gra,key)=>{
                            return(
                                <tr key={key}>
                                    <th className="col-md-6">
                                        {gra.name}
                                    </th>
                                    <th className="col-md-1">
                                        {gra.manufacture}
                                    </th>
                                    <th className="col-md-3">
                                        {gra.interface}
                                    </th>
                                    <th className="col-md-1">
                                        {gra.gpu}
                                    </th>
                                    <th className="col-md-2">
                                        {gra.directx}
                                    </th>
                                    <th className="col-md-2">
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
                        }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default GraTable;