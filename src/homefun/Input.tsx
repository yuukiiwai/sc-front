import React,{useContext} from "react";

interface Props{
    id : string,
    title:string,
    value:string,
    example:string,
    handlechange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    enter:()=>void,
}

const Input:React.FC<Props> = (props:Props) =>{
    return(
        <div className="accordion-item search-ac">
            <h2 className="accordion-header" id={"panelsStayOpen-heading"+props.id}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse"+props.id} aria-expanded="true" aria-controls={"panelsStayOpen-collapse"+props.id}>
                {">" + props.title}
                </button>
            </h2>
            <div id={"panelsStayOpen-collapse" + props.id} className="accordion-collapse collapse show" aria-labelledby={"panelsStayOpen-heading" + props.id}>
                <div className="accordion-body">
                <input type={"text"} className="form-control" aria-describedby="inputGroup-sizing-sm" 
                placeholder={props.example}
                value={props.value} 
                onChange={props.handlechange} 
                onKeyDown={ e =>{
                    if(e.key === 'Enter'){
                        props.enter()
                    }}}/>
                </div>
            </div>
        </div>
    );
}

export default Input;