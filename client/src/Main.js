import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./styles/Main.css"
import UploadButton from "./UploadButton";
import axios from "./axios";

function Main(){
    const [musics, setMusics] = useState("");
    useEffect(()=>{
        const fetchdata = async () =>{
            const data = await axios.get("/marketplace").then()
            console.log('music >>>>', data)
            setMusics(data); 
        };
        fetchdata();
    }, []);
    return(
        <div>
            <Navbar/>
            {
                musics && musics?.data.map((music) =>{
                    return(
                    <div>
                        <h2>{music.songName}</h2>
                        <h3>{music.artistName}</h3>
                        <audio src={music.songUrl}>Play Now</audio>
                    </div>
                    )
                })
            }
            <UploadButton/>
        </div>
    )
}

export default Main