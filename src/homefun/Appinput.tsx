import React,{useContext} from "react";
import swal from "sweetalert";

interface bProps{
    id : number,
    value:string,
    example:string,
    handlechange:(event:React.ChangeEvent<HTMLInputElement>,key:number)=>void,
    enter:()=>void,
}

interface Props{
    value:Array<string>,
    example:string,
    handlechange:(event:React.ChangeEvent<HTMLInputElement>,key:number)=>void,
    enter:()=>void,
    plusbutton:()=>void,
    minusbutton:()=>void
}

const InputBox:React.FC<bProps> = (props:bProps) =>{
    return(
        <div>
        <input type={"text"} className="form-control" aria-describedby="inputGroup-sizing-default" 
            placeholder={props.example}
            value={props.value} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{props.handlechange(e,props.id)}} 
            onKeyDown={ e =>{
                if(e.key === 'Enter'){
                    props.enter()
                }}}/>
        </div>
    )
}

const Appinput:React.FC<Props> = (props:Props) =>{
    const hintclick = () => {
        swal({
            title:"ヒント",
            icon:"info",
            text:"目的のアプリが見つからない場合、\nスペルを上タブの「登録アプリ一覧」よりご確認ください。"
        });
    }
    return(
        <div className="top-search">
            <div className="top-search-container">
                <i className="fa-solid fa-magnifying-glass"></i>
                {" "}<i onClick={()=>{hintclick()}} className="fa-regular fa-circle-question"></i>
                {props.value.map((item,key)=>{
                    return(
                        <InputBox
                        key={key}
                        id={key}
                        example={props.example}
                        value={item} 
                        handlechange={props.handlechange} 
                        enter={props.enter}/>
                    )
                    })
                }
                <button onClick={props.plusbutton} className="btn plmi-btn"><i className="fa-solid fa-plus"></i></button>
                {
                    props.value.length > 1 &&
                    <button onClick={props.minusbutton} className="btn plmi-btn"><i className="fa-solid fa-minus"></i></button>
                }
                <button className="big-search-button btn" onClick={props.enter}>検索</button>
            </div>
        </div>
    );
}

export default Appinput;