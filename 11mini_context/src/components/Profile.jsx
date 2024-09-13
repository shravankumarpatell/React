import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return( 
    <div>
        <div>Welcome {user.username}</div>
        <div>Your Password:  {user.password}</div>
    </div>
    )
}

export default Profile