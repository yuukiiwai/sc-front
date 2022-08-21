import React from "react";
import AppExp from "./AppEXP";
import Endcard from "./Endcard";
import OptionExp from "./OptionEXP";
import TableExp from "./TableEXP";
import { useCookies } from 'react-cookie';

const SiteAbout:React.FC = () =>{
    /* Site about display flag */
    const [displayflag,setDF] = React.useState<boolean>(true);
    const [dfAE,setDFappexp] = React.useState<boolean>(false);
    const [dfTE,setDFtableexp] = React.useState<boolean>(false);
    const [dfOP,setDFoptionexp] = React.useState<boolean>(false);
    const [dfEC,setDFendcard] = React.useState<boolean>(false);

    /* tutorial cookie */
    const [cookies,setCookie,removeCookie] = useCookies(["turoial"]);

    const LookSiteAbout = () => {
        setDF(false);
        setDFappexp(true);
    }
    const notLookSiteAbout = () =>{
        setDF(false);
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
            {(typeof(cookies.turoial) === typeof(undefined) && cookies.turoial !== false) && displayflag && 
            <div id="overlay">
                <div className="overtext">
                
                <h1 className="center-h">このサイトについて</h1>
                <hr />
                <p>チュートリアルを...</p>
                <p onClick={LookSiteAbout}>見る</p>
                <p onClick={notLookSiteAbout}>見ない</p>
                <p onClick={()=>{
                    setCookie('turoial',false);
                }}>二度と表示しない{"（Cookieを使用します）"}</p>
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