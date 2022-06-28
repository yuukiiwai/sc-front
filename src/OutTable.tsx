import React,{FC} from "react"

interface tableprops{
    title:string,
    list : Array<outitem>,
}

export interface outitem{
    name:string,
    url:string
}

const OutTable:FC<tableprops> = (props:tableprops) => {
    return(
        <div className="outtable box">
            <table className='table table-striped'>
                <thead  className="sticky-top bg-light">
                    <tr >
                        <th scope='col'>{props.title}</th>
                        <th scope="col">公式ページ</th>
                        <th scope="col">amazon</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((grab:outitem,key)=>{
                            return(
                                <tr key={key}>
                                    <th className="col-md-6">
                                        {grab.name}
                                    </th>
                                    <th className="col-md-2">
                                        <a target={"_blank"} rel={"noopener noreferrer"} href={grab.url}>公式ページ</a>
                                    </th>
                                    <th className="col-md-1">
                                        <a target={"_blank"} rel={"noopener noreferrer"} href={"https://www.amazon.co.jp/s?k="+grab.name}>
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

export default OutTable;