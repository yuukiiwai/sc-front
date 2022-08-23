import React from "react";
import AppExp from "./AppEXP";
import Endcard from "./Endcard";
import OptionExp from "./OptionEXP";
import TableExp from "./TableEXP";
import { useCookies } from 'react-cookie';

interface Props{
    displayflag:boolean,
    notLook:()=>void
}

const SiteAbout:React.FC<Props> = (props:Props) =>{
    /* Site about display flag */
    const [dfAE,setDFappexp] = React.useState<boolean>(false);
    const [dfTE,setDFtableexp] = React.useState<boolean>(false);
    const [dfOP,setDFoptionexp] = React.useState<boolean>(false);
    const [dfEC,setDFendcard] = React.useState<boolean>(false);

    const LookSiteAbout = () => {
        props.notLook();
        setDFappexp(true);
    }
    const notLookSiteAbout = () =>{
        props.notLook();
    }

    const nextAP = () => {
        setDFappexp(false);
        setDFtableexp(true);
    }

    const nextTE = () => {
        setDFtableexp(false);
        setDFoptionexp(true);
    }

    const nextOP = () => {
        setDFoptionexp(false);
        setDFendcard(true);
    }

    const end = () => {
        setDFendcard(false);
    }

    return(
        <div>
            {props.displayflag &&
            <div id="overlay">
                <div className="overtext">
                
                <h1 className="center-h">このサイトについて</h1>
                <hr />
                <p>使い方を...</p>
                <p className="site-op" onClick={LookSiteAbout}>見る</p>
                <p className="site-op" onClick={notLookSiteAbout}>見ない</p>
                </div>
            </div>
            }
            {
                <AppExp
                displayflag = {dfAE}
                next = {nextAP}
                />
            }
            {
                <TableExp
                displayflag = {dfTE}
                next = {nextTE}
                />
            }
            {
                <OptionExp
                displayflag={dfOP}
                next = {nextOP}
                />
            }
            {
                <Endcard
                displayflag={dfEC}
                next={end}
                />
            }
        </div>
    )
}

export default SiteAbout;