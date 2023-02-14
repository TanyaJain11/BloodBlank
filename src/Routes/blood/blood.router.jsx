import { useEffect,useState } from "react"
import { Route, Routes,useNavigate } from "react-router-dom"
import axios from "axios"
import BloodDonaters from "../blood-group/blood-donaters.router"
import BloodGroupContainer from "../../components/blood-groups-container/blood-groups-container.component"

const BloodRouter = ()=>{
    const [bloods,setBloods] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        try {
            async function load(){
                const response = await axios.post('http://localhost:8000/Blood/getAllBloods',{
                    token:localStorage.getItem('token')
                });
                setBloods(await response.data);
            }
            load()
        } catch (error) {
            console.log(error)
            alert('Session Expierd')
            navigate('/sign-up');
        }
    },[]);
    return(
        <Routes>
            <Route index element={<BloodGroupContainer/>}/>
            <Route path="/:id" element={<BloodDonaters data={bloods}/>}/>
        </Routes>
    )
}

export default BloodRouter