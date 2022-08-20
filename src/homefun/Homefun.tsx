import React from 'react';
import Input from './Input';
import Checkboxs from './Checkboxs';
import axios from 'axios';
import swal from 'sweetalert';
import { outitem } from './OutTable';
import Appinput from './Appinput';
import Tablecnt from './TableCnt';
import { gra } from './GraTable';
import SiteAbout from './SiteAbout';

export interface homeprops {
    hosturl:string | undefined
}

const Homefun:React.FC<homeprops> = (props:homeprops) =>{
    // for test function
    const handleClick_tes = () =>{
        console.log("click");
        console.log(appnames);
        console.log(cpu);
        console.log(options);
    }

    /* input state */
    const hosturl = props.hosturl;
    const [appnames,setAppname] = React.useState<Array<string>>([""]);
    const [cpu,setCPU] = React.useState('');
    const [options, setOption] = React.useState(Array<string>);

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
        let tarr = appnames.slice();
        tarr.push("");
        setAppname(tarr);
    }

    const minusbutton = () => {
        let tarr = appnames.slice();
        tarr.pop();
        setAppname(tarr);
    }

    const handleClick = () => {
        const oriurl:string = hosturl + "/api/v1/devicesearch/appsat/gra/"
        if(appnames.length === 1 && appnames[0] === ""){
        swal({
            title:"アプリ名を入力してください。",
            icon:"error",
            text:"情報が不足しています。",
        });
        return;
        }
        let pappname:string = appnames.filter((appname)=>{
            if (appname.replace(" ","") !== ""){
                return appname;
            }
        }).join("&appname[]=");
        let url:string = oriurl + "?appname[]=" + pappname;
        if(cpu !== ""){
        url = url + "&cpu="+cpu;
        }
        for(let i:number = 0; i < options.length ; i++){
        url = url + "&" + options[i] + "=true";
        }
        console.log(url);
        axios.get(url)
        .then(res => {
        const data = res.data;
        const graData = data.gra_list;
        let tmpGrlist:Array<gra> = [];
        for(let i=0;i<graData.length;i++){
            let newgra:gra = {
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
        setGrab(tmpGrlist);
        });
    }

    return (
        <div className="main">
            <SiteAbout />
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

export default Homefun;