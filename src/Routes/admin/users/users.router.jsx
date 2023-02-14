import { useContext,useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/user.context"
import axios from "axios";
import MessageShowComponent from "../../../components/admin/messageShow/messageShow.component";

const Users = ()=>{
    const { user } = useContext(UserContext);
    const [users,setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        async function load(){
            try {
                const response = await axios.post('http://localhost:8000/user/getAllUser',{
                    token:localStorage.getItem('token')
                })
                setUsers(await response.data.users);
                console.log(users)
            } catch (error) {
                console.log(error)
            }
        }
        load()
    },[])
    if(!user.isAdmin){
        navigate('/');
    }
    return(
        <div>
            <div>
                {
                    users.map(({email})=><MessageShowComponent email={email}/>)
                }
            </div>
        </div>
    )
}

export default Users