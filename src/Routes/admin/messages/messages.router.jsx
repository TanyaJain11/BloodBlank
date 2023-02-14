import { useState,useEffect } from "react";
import axios from "axios";
import MessageShowComponent from "../../../components/admin/messageShow/messageShow.component";

const MessageRoute = ()=>{
    const [messages,setMessage] = useState([]);
    useEffect(()=>{
        async function load(){
            const response = await axios.post('http://localhost:8000/message/getAllMessages',{
                token:localStorage.getItem('token')
            });
            setMessage(await response.data.response);
            console.log(messages);
        }
        load();
    },[]);

    return (
        <div style={{
           display:'flex',
           justifyContent:'center',
        }}>
            <div style={{
                width:'65%',         
            }}>
                {
                    messages.map(({id,name,subject,phoneNo,email,message})=>{
                        return (
                            <MessageShowComponent id={id} name={name} subject={subject} phoneNo={phoneNo} email={email} message={message}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MessageRoute;