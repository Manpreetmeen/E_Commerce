import React from 'react'

export default function Profile() {
    const auth = localStorage.getItem("users");
    const capitalizeFun = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
  return (
    <>
    <div className='profile-div'> 
    <img  alt='profile-img' src='https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png'></img>
    <h1>
         Profile
     </h1>
     <h2> 
     Name : {capitalizeFun(JSON.parse(auth).name)}
     </h2>
     <h2>
     Email : {(JSON.parse(auth).email)}
     </h2>
     </div>
    </>
  )
}
