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
        console.log(appname);
        console.log(cpu);
        console.log(options);
    }

    /* input state */
    const hosturl = props.hosturl;
    const [appname,setAppname] = React.useState('');
    const [cpu,setCPU] = React.useState('');
    const [options, setOption] = React.useState(Array<string>);

    /* output state */
    const [gra_list,setGrab] = React.useState(Array<gra>);
    const [memo_list,setMemor] = React.useState(Array<outitem>);

    const handleAppname = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAppname(e.target.value);
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

    const handleClick = () => {
        const oriurl:string = hosturl + "/api/v1/devicesearch/appsat/gra/"
        if(appname === ""){
        swal({
            title:"アプリ名を入力してください。",
            icon:"error",
            text:"情報が不足しています。",
        });
        return;
        }
        let url:string = oriurl + "?appname=" +appname;
        if(cpu !== ""){
        url = url + "&cpu="+cpu;
        }
        for(let i:number = 0; i < options.length ; i++){
        url = url + "&" + options[i] + "=true";
        }
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
                    id='1'
                    title='アプリ名'
                    value={appname}
                    example="MINECRAFT"
                    handlechange={handleAppname}
                    enter={handleClick}
                />
            <div className='parallel'>
                <div className='side'>
                    <div className="accordion box">
                        <Input
                        id='2'
                        title='CPU名 (例:Intel Core i5-4590S)'
                        value={cpu}
                        example="Intel Core i5-4590S"
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
                    <button type='button' className='btn btn-outline-dark btn-lg box schbutton' onClick={handleClick}>検索</button>
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