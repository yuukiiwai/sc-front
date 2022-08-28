import React from "react"
import GraTable, { gra} from "./GraTable";
import { tableprops } from "./OutTable";

interface tablecntprops{
    gralist:Array<gra>,
    memorlist?:tableprops
};

const Tablecnt:React.FC<tablecntprops> = (props:tablecntprops)=>{
    return(
        <div>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                    >
                    グラフィックカード
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                >
                    <GraTable 
                    list={props.gralist}
                    />
                </div>
            </div>
        </div>
    );
}

export default Tablecnt;