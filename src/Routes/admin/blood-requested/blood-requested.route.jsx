import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BloodDonater from "../../../components/blood-donater/blood-donater.component"
import { UserProvider } from "../../../context/user.context";


const BloodRequstedRoute  = ()=>{
    console.log('Hello');
    const { user } = useContext(UserProvider);
    const navigate = useNavigate();
    const bloodRequestsArray = JSON.parse(window.localStorage.getItem('bloodRequestArray'));
    console.log(bloodRequestsArray)
    if(!user.admin){
        navigate('/');
    }
    return(
        <div>
            <h1>Blood Requests:-</h1>
            {
                bloodRequestsArray.map((u,idx) => <BloodDonater key={idx} nameOfDoner={u.email} />)
            }
        </div>
    )
}

export default BloodRequstedRoute