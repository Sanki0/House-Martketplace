import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'

function Profile() {
  const [user, setUser] = useState(null)

  const auth = getAuth()

  useEffect(() => {
    setUser(auth.currentUser)
    console.log(auth.currentUser)
  }, [])

  return user ? (
    <div>
      <h1>Profile</h1>
      <h2>{user.displayName}</h2>
    </div>

  )
  : 
  (
    <h1>Not Logged in</h1>
  )
}

export default Profile