import React from "react";

interface checkprops{
    id:string,
    title:string,
    handlechange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    checkitem:Array<check>
}

interface check{
    value:string,
    name:string
}

const Checkboxs:React.FC<checkprops> = (props:checkprops) => {
    return(
        <div className="accordion-item">
            <h2 className="accordion-header" id={"panelsStayOpen-heading" + props.id }>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse"+props.id} aria-expanded="false" aria-controls={"panelsStayOpen-collapse"+props.id}>
                {">"+props.title}
                </button>
            </h2>
            <div id={"panelsStayOpen-collapse"+props.id} className="accordion-collapse collapse" aria-labelledby={"panelsStayOpen-heading" + props.id }>
                <div className="accordion-body">
                    <div className="form-check form-check-inline">
                        <input className={"form-check-input"} type="checkbox" id="inlineCheckbox1" value="lowprofile" onChange={props.handlechange}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">low profile</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkboxs;