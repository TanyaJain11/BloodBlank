import { useParams } from 'react-router-dom'
import BloodDonater from "../../components/blood-donater/blood-donater.component"
import './blood-dontaers.css'
import Search from '../../components/search/search.component'

const BloodDonaters = ({data}) =>{
    let { id } = useParams();
    
    return(
        <div className="BloodDonaters">
            <Search/>
            {
                data.map(({ quantity,nameOfDoner,bloodGroup,location,city,state,email },idx)=>{
                    console.log(id,bloodGroup);
                    if(bloodGroup === id){
                        return <BloodDonater key={idx} email={email} nameOfDoner={nameOfDoner} bloodGroup={bloodGroup} quantity={quantity} location={location} city={city} State={state} />
                    }
                    return ''
                })
            }
        </div>
    )
}

export default BloodDonaters