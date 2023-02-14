import { Fragment, useState } from 'react';
import axios from 'axios';
import Button from '../../components/buttons/Button.component';
import FrontImage from '../../components/frontImage/frontImage.component'
import Input from '../../components/input/input.component';
import './contact.css'

const Contact = ()=>{
    const [name,setName] = useState('');
    const [subject,setSubject] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [phone,setPhone] = useState(0);

    const customClick = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/message/postMessage',{
                name:name,
                subject:subject,
                phoneNo:phone,
                email:email,
                message:message,
                token:localStorage.getItem('token')
            })
            console.log(await response);
            alert("Message Sent Successfully!");
        } catch (error) {
            console.log(error);
            alert("Please Check Fields!");
        }
    }
    return(
        <Fragment>
            <FrontImage title={"Contact Us"}/>
            <div className='form-container'>
                <div className='form'>
                    <form>
                        <div>
                            <h1>Leave A Message</h1>
                        </div>
                        <div>
                            <Input type={"text"} placeholder={"Enter Name"} className="input_text" setData={setName}/>
                            <Input type={"email"} placeholder={"Enter Email"} className="leftEle"  setData={setEmail}/>
                        </div>
                        <div>
                            <Input type={"text"} placeholder={"Enter Subject"} className="input_text" setData={setSubject}/>
                            <Input type={"number"} placeholder={"Enter Phone"} className="leftEle" setData={setPhone}/>
                        </div>
                        <div>
                            <textarea className="input_text text-area" placeholder='Enter Message' onChange={(e)=>setMessage(e.target.value)}></textarea>
                        </div>
                        <div id='btn-box'>
                            <Button title={"Send A Message"} name={"red-wt-button-sm"} customClickEvent={customClick} />
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact;