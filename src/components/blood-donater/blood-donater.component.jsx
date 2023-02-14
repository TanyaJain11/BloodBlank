import { useContext } from 'react';
import { BloodDonaterProvider } from '../../context/bloodDonaters.context';
import { UserContext } from '../../context/user.context';
import axios from 'axios'
import Button from '../buttons/Button.component';
import './blood-donater.css'

const BloodDonater = ({ quantity,nameOfDoner,location,city,State,email,bloodGroup })=>{

    const { bloodRequests,setBloodRequests } = useContext(BloodDonaterProvider);
    const { user } = useContext(UserContext);

    const requestClick = async()=>{
        if(user){
            try {
                const response =await axios.post('http://localhost:8000/blood/requestBlood',{token:localStorage.getItem('token'),bloodData:{quantity,nameOfDoner,location,city,State,email,bloodGroup}});
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
            console.log(bloodRequests);
        }
    }

    return(
        <div className="blood-donater">
            <div>
                <h1>{quantity} Packets Of Blood</h1>
                <p>{nameOfDoner}</p>
            </div>
            <div className='lines'>
                <div className='l1'></div>
                <div className='l2'></div>
            </div>
            <div className='get-blood-div'>
                <span>{location}, {city} {State}</span>
                {
                    nameOfDoner? (
                        <Button title={"Get Blood"} customClickEvent={requestClick} name={"red-wt-button-sm"}/>
                    ):''
                }
            </div>
        </div>
    )
}

export default BloodDonater;