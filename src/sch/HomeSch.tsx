import React from 'react';
import Input from './Input';
import Checkboxs from './Checkboxs';
import axios from 'axios';
import swal from 'sweetalert';
import { outitem } from './OutTable';
import Appinput from './Appinput';
import Tablecnt from './TableCnt';
import { gra } from './GraTable';
import SiteAbout from '../SiteAbout/SiteAbout';

export interface homeprops {
    hosturl:string | undefined
}

const HomeSch:React.FC<homeprops> = (props:homeprops) =>{
    /* input state */
    const hosturl = props.hosturl;
    const gparam:string = window.location.search;
    let defapp:string = "";
    try{
        defapp = gparam.replace("?","")
        .split("&")[0]
        .split("=")[1]
        .replace(" ","");
    }catch{
        defapp = "";
    }
    const [appnames,setAppname] = React.useState<Array<string>>([defapp]);
    const [cpu,setCPU] = React.useState('');
    const [options, setOption] = React.useState(Array<string>);

    /* first load flag */
    const [oneload,setLoad] = React.useState<number>(0);

    /* help view flag */
    const [helpflag,setHelp] = React.useState<boolean>(false);

    /* output state */
    const [gra_list,setGrab] = React.useState(Array<gra>);
    const [memo_list,setMemor] = React.useState(Array<outitem>);

    const handleAppname = (e:React.ChangeEvent<HTMLInputElement>,key:number) => {
        let newappnames = appnames.slice();
        newappnames.splice(key,1,e.target.value);
        setAppname(newappnames);
    }

    const handleCpu = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCPU(e.target.value);
    }

    const handleoption = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(options.includes(e.target.value)){
        setOption(options.filter(item => item !== e.target.value));
        }else{
        setOption([...options,e.target.value]);
        }
    }

    const plusbutton = () => {
        let allowplus = false;
        for(let i = 0;i<appnames.length;i++){
            if(appnames[i] !== ""){
                allowplus = true;
                break;
            }
        }
        if(allowplus){
            let tarr = appnames.slice();
            tarr.push("");
            setAppname(tarr);
        }else{
            swal({
                title:"すべて空欄です。",
                icon:"error",
                text:"枠を追加するには、１つは埋める必要があります。",
            });
        }
    }

    const minusbutton = () => {
        let tarr = appnames.slice();
        tarr.pop();
        setAppname(tarr);
    }

    const schOnOff = ():boolean => {
        if(appnames.length === 1 && appnames[0] === ""){
            swal({
                title:"アプリ名を入力してください。",
                icon:"error",
                text:"情報が不足しています。",
            });
            return false;
        }
        return true;
    }

    const makeurl = ():string=>{
        let url:string = "";
        const oriurl:string = hosturl + "/api/v1/devicesearch/appsat/gra/"
        let pappname:string = appnames.filter((appname)=>{
            if (appname.replace(" ","") !== ""){
                return appname;
            }
        }).join("&appname[]=");
        url = oriurl + "?appname[]=" + pappname;
        if(cpu !== ""){
        url = url + "&cpu="+cpu;
        }
        for(let i:number = 0; i < options.length ; i++){
        url = url + "&" + options[i] + "=true";
        }
        return url;
    }

    const handleClick = () => {
        if(schOnOff() === false){
            return;
        }
        const url = makeurl();
        let tmpGrlist:Array<gra> = [];
        // console.log(url);
        axios.get(url)
        .then(res => {
            const data = res.data;
            const mes:string = res.data.message;
            if(mes == "Sorry"){
                swal({
                    title:"ごめんなさい",
                    icon:"error",
                    text:"当サイトはまだそのアプリに対応できていません。\n上部バーの「登録アプリ一覧」から対応アプリをご確認ください。",
                });
            }
            const graData = data.gra_list;
            for(let i=0;i<graData.length;i++){
                const newgra:gra = {
                name:graData[i].name,
                url:graData[i].url,
                directx:graData[i].directx,
                gpu:graData[i].gpu,
                interface:graData[i].interface,
                manufacture:graData[i].manufacture,
                opengl:graData[i].opengl
                }
                tmpGrlist.push(newgra)
            }
            // !!! ここに入れてるとうまくいく。後で考察 !!!
            setGrab(tmpGrlist);
        });
    }

    if(oneload === 0 && defapp !== ""){
        handleClick();
        setLoad(1);
    }

    const hintclick = () => {
        setHelp(true);
    }

    const helpclose = () => {
        setHelp(false);
    }

    return (
        <div className="main">
            {
                <SiteAbout 
                displayflag = {helpflag}
                notLook = {helpclose}
                />
            }
            <i onClick={()=>{hintclick()}} className="fa-regular fa-circle-question"/>
            <Appinput
                value={appnames}
                example="どのアプリを使いたいですか？（例:OBS）"
                handlechange={handleAppname}
                enter={handleClick}
                plusbutton={plusbutton}
                minusbutton={minusbutton}
                />
                <hr></hr>
            <div className='parallel'>
                <div className='side'>
                    <div className="accordion box">
                        <Input
                        id='2'
                        title='CPU名'
                        value={cpu}
                        example="(例:Intel Core i5-4590S)"
                        handlechange={handleCpu}
                        enter={handleClick}
                        />
                        <Checkboxs
                        id='3'
                        title='オプション'
                        handlechange={handleoption}
                        checkitem={[{name:"low profile",value:"lowprofile"},]}
                        />
                    </div>
                    <button type='button' className='btn btn-outline-dark btn-lg schbutton' onClick={handleClick}>検索</button>
                </div>
                <div className='tablecont'>
                    <Tablecnt 
                        gralist={gra_list}
                    />
                </div>
            </div>
        
        </div>
    );
}

export default HomeSch;