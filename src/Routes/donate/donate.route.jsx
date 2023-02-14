import { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/user.context'
import { BloodDonaterProvider } from '../../context/bloodDonaters.context';
import Button from '../../components/buttons/Button.component';
import Input from '../../components/input/input.component';
import './donate.css'

const Donate = ()=>{
    const [nameOfDoner,setName] = useState();
    const [city,setCity] = useState('');
    const [location,setLocation] = useState('');
    const [state,setState] = useState('');
    const [quantity,setPackets] = useState('');
    const [bloodGroup,setBloodGroup] = useState('');
    const { user } = useContext(UserContext);
    const { addBlood,data,bloodDonated } = useContext(BloodDonaterProvider);
    const navigate = useNavigate();
    const donateBloodEvent = async (e) =>{
        try {
            const bloodData = { nameOfDoner,city,location,state,quantity:Number(quantity),bloodGroup,email:user.email,token:localStorage.getItem('token') };
            const resposne =await axios.post('http://localhost:8000/Blood/addBlood',bloodData);
            if(await resposne.data){
                alert('Blood Added sucessfully');
            }
            console.log(resposne)
        } catch (error) {
            console.log(error);
            alert('Session Expeired!');
            navigate('/sign-up');
        }
    }

    return (
        <div className='donate'>
            <div className='donateForm'>
                <div>
                    <div>
                        <h3>Name:-</h3>
                        <Input type={'text'} className={'input_text'} placeholder={'Enter Your Name'} setData={setName}/>
                    </div>
                    <div>
                        <h3>City:-</h3>
                        <Input type={'text'} className={'input_text'} placeholder={'Enter Your City'} setData={setCity}/>
                    </div>
                    <div>
                        <h3>Location:-</h3>
                        <Input type={'text'} className={'input_text'} placeholder={'Enter Your Location'} setData={setLocation}/>
                    </div>
                    <div>
                        <h3>State:-</h3>
                        <Input type={'text'} className={'input_text'} placeholder={'Enter Your State'} setData={setState}/>
                    </div>
                    <div>
                        <h3>Blood Group:-</h3>
                        <Input type={'text'} className={'input_text'} placeholder={'Enter Your Blood Group'} setData={setBloodGroup}/>
                    </div>
                    <div>
                        <h3>No of Packets:-</h3>
                        <Input type={'number'} className={'input_text'} placeholder={'Enter No of Packets'} setData={setPackets}/>
                    </div>
                    <div>
                        <Button name={'red-wt-button-sm'} title={'Donate'} customClickEvent={donateBloodEvent} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate