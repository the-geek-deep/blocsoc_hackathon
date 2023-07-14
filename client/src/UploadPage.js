import React, { useState } from "react";
import "./styles/UploadPage.css";
import axios from "./axios";

function UploadPage() {
    const [artistName, setartistName] = useState("");
    const [songName, setsongName] = useState("");
    const [songUrl, setsongUrl] = useState("");
    const addMusic = (e) => {
        e.preventDefault();
        axios.post("/UploadYourMusic", {artistName, songName, songUrl}).then(()=>{
            setartistName("");
            setsongName("");
            setsongUrl("");
        }).catch((error) => alert(error.message))
    }
    return (
        <div>
            <div id="UploadPageTitle">
                <h2>Upload Your Music</h2>
            </div>
            <div>
                <form id="form1" method="POST" action="/UploadYourMusic">
                    <label>Artist Name:</label>
                    <input placeholder="Artist Name" name="artistName" value={artistName} onChange={(e) => setartistName(e.target.value)}></input>
                    <label>Music Name:</label>
                    <input name="musicName" value={songName} onChange={(e) => setsongName(e.target.value)}></input>
                    <label>Music Link:</label>
                    <input type="text" placeholder="Drive Link" name="musicUrl" value={songUrl} onChange={(e) => setsongUrl(e.target.value)} />
                    <button type="submit" onClick={addMusic}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UploadPage