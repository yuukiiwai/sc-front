import React,{FC} from "react";
import Input from "./Input";
import Table from "./Table";
import Title from "./Title";

interface Props{
    origin:string
}

const Home:FC<Props> = (props:Props) => {
    return(
        <div className="main">
            <Input/>
            <Title />
            <Table
            origin={props.origin}
            />
        </div>
    );
}

export default Home;