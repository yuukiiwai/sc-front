import React,{useContext} from "react";

interface Props{
    id : string,
    title:string,
    value:string,
    example:string,
    handlechange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    enter:()=>void,
}

const Appinput:React.FC<Props> = (props:Props) =>{
    return(
        <div className="input-group mb-3 appinput">
            <span className="input-group-text">{props.title}</span>
            <input type={"text"} className="form-control" aria-describedby="inputGroup-sizing-default" 
                placeholder={props.example}
                value={props.value} 
                onChange={props.handlechange} 
                onKeyDown={ e =>{
                    if(e.key === 'Enter'){
                        props.enter()
                    }}}/>
            <button type={"button"} onClick={props.enter} className="input-group-text"><i className="bi bi-search">検索</i></button>
        </div>
    );
}

export default Appinput;