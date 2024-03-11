import { useContext } from "react";
import { GlobalContext } from "../context/Context";

// const Artickelbaru = ({ isnew }) => {
//     return isnew && "--Baru !!";
// }

const Newartickel = () => {
    return <span>--Baru--</span>
}


function Article(props) {
    const user = useContext(GlobalContext);

    return (
        <>
            <h3>{props.title}</h3>
            <small>Date : {props.date} - Tags : {props.tags.join(",  ")}{" "}
            {props.isnew && <Newartickel /> }
            </small>
            <div>
                <small>Di tulis oleh : {user.username}</small>
            </div>
        </>
    );
}

export default Article;

// {props.isnew ? "--Baru" : "Lama"}
// {props.isnew && "--Baru--"} 
// <Artickelbaru isnew={props.isnew}/> 