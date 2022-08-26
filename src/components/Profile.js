import React from 'react'
//  to navigate using buttons instead of Link and to   -- now useHistory hook removed from react-dom version 6
import {useNavigate, useParams} from "react-router-dom";

function Profile() {

    // to navigate through button
    const navigate = useNavigate();

    // using params
    const { username }  = useParams();

  return (
    <div className='heading'>
        This is the profile component for {username}.<br />
        {/* to navigate using buttons instead of Link and to  */}
        <button onClick = {()=>{
            navigate("/about");
        }}> 
        Go to About page
        </button>

    </div>
  )
}

export default Profile;
