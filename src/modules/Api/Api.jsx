import {useEffect, useState} from "react";
import './Api.css'

export const Api = () => {
  const [userData, setUserData] = useState(null)

  const normalizeUser = (data) => {
    if ((!data || data.results === 0)) {
      return null
    }

    const user = data.results[0]

    return {
      name: `${user.name.first} ${user.name.last}`,
      picture: user.picture.large
    }
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => setUserData(normalizeUser(json)))
  }, []);

  if (!userData) return <p>Loading...</p>

  return (
    <div className='page'>
      <h1>{userData.name}</h1>
      <img alt={userData.name} src={userData.picture}/>
    </div>
  )
}
