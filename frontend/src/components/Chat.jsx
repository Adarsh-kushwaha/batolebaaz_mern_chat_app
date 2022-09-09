import React, { useEffect } from 'react';
import axios from "axios";

const Chat = () => {

    const fetchData = async () => {
        const data = await axios.get("/chat");
        console.log(data);
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>

        </div>
    )
}

export default Chat