import { useContext,useEffect,useState } from "react";
import { UserContext } from "../../context/user.context";
import axios from 'axios';
import BloodDonater from "../../components/blood-donater/blood-donater.component";
import './info.css';

const Info = () =>{
    const [ bloodDonated,setBloodDonated ] = useState([]);
    const [ bloodRequested,setBloodRequested ] = useState([]);
    // const { bloodRequests } = useContext(BloodDonaterProvider);
    const { user } = useContext(UserContext);
    useEffect(()=>{
            async function load(){
                try{
                    const response = await axios.post('http://localhost:8000/user/getUserBlood',{
                        email:user.email
                    });
                    const data = await response.data.user.bloodRequested;
                    setBloodRequested(await data);
                    console.log("data",data);
                    console.log("State",bloodRequested);
                } catch (error) {
                    console.log(error);
                }
            }
            load();
    },[])
    return(
        <div className="info">
            <h1>Blood Donated:-</h1>
            {
                bloodDonated.map((blood,idx)=>{
                    console.log(blood)
                    if(blood.email===user.email){
                        return(
                                <div className="space">
                                    <BloodDonater key={idx} quantity={blood.quantity} location={blood.location} city={blood.city} State={blood.state}/>
                                </div>
                            ) 
                    }
                })
            }
            <div className="info">
                <h1>Blood Requested:-</h1>
                {
                    bloodRequested.map((blood,idx)=>{
                        return(
                            <div className="space">
                                <BloodDonater key={idx} quantity={blood.quantity} location={blood.location} city={blood.city} State={blood.state}/>
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
    )
}

export default Info