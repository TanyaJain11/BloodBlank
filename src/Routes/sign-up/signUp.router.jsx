import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import axios from 'axios';
import Button from "../../components/buttons/Button.component"
import Input from "../../components/input/input.component"
import './signUp.css'

const SignUp = ()=>{
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [userName,setUserName] = useState('');
    const { setUser ,user } = useContext(UserContext);

    const validateEmail = (email)=>{
        console.log(email);
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }

    const validPassword = (password)=>{
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    }

    const signUp =async ()=>{
        console.log("ddd");
        try {
                const user = {
                    name:userName,
                    email:email,
                    password,
                    isAdmin:false
                }
                // if(!(validateEmail(email) && validPassword(password))) return;
                const response = await axios.post('http://localhost:8000/user/addUser',user)
                console.log(await response);
        } catch (error) {
            console.log(error)
        }
    }

    const login = async ()=>{
        try {
            const user ={
                email,
                password
            }
            // if(!(validateEmail(email) && validPassword(password))) return;
            const response = await axios.post('http://localhost:8000/user/login',user);
            setUser(response.data.user);
            localStorage.setItem('token',response.data.token);
        } catch (error) {
            console.log(error);
        }
    }

    if(user){
        navigate('/');
    }

    return(
        <div className="signup">
            <h1>CREATE AN ACCOUNT OR LOGIN</h1>
            <div className="text">
                <Input className={'input_text'} placeholder={"User Name"} setData={setUserName}/>
            </div>
            <div className="text">
                <Input className={'input_text'} placeholder={"Email"} setData={setEmail}/>
            </div>
            <div className="text">
                <Input className={'input_text'} placeholder={"Password"} setData={setPassword} type={"password"}/>
            </div>
            <div className="btn">
                <Button title={"SIGN UP"} name={'wt-black-button-sm'} customClickEvent={signUp} setUser={setUser} email={email} password={password} user={user}/>
            </div>
            <div className="btn">
                <Button title={"LOGIN IN"} name={'wt-black-button-sm'} customClickEvent={login} email={email} password={password}/>
            </div>
        </div>
    )
}

export default SignUp