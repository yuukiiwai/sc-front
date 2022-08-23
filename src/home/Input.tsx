import React,{FC, useState} from "react";
import {useNavigate} from "react-router-dom";

const Input:FC = () => {
    const [value,setValue] = useState<string>("");
    const navigate = useNavigate();
    const inputing = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return(
        <div className="input-group mb-3 appinput">
            <span className="input-group-text">アプリ名</span>
            <input 
            type="text" 
            className="form-control"
            aria-describedby="inputGroup-sizing-default" 
            value={value} 
            onChange={inputing}
            onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                    navigate("/sch/?s="+value);
                }
            }}
            autoComplete={"on"}
            list={"applist"}
            />
            <datalist id="applist">
                <option value="obs"/>
                <option value="minecraft"/>
                <option value="FORTNITE"/>
            </datalist>
            <button 
            onClick={()=>{navigate("/sch/?s="+value)}}
            className="btn-outline-secondary btn-lg"
            >
                <i className="fa-solid fa-magnifying-glass"/>
            </button>
        </div>
    );
}

export default Input;