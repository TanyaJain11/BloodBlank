import './messageShow.css'

const MessageShowComponent = ({name,email,subject,phoneNo,message})=>{
    return (
        <div className='message-component'>
            <div className='name'>
                <h2>Name = {name}</h2>
            </div>
            <div className='subject'>
                <h2>Subject = {subject}</h2>
            </div>
            <div className='email'>
                <h2>Email = {email}</h2>
            </div>
            <div className='phoneNo'>
                <h2>Phone No = {phoneNo}</h2>
            </div>
            <div className='message'>
                <h2>Message = {message}</h2>
            </div>
        </div>
    )
}

export default MessageShowComponent;