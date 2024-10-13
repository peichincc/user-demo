import React from 'react'

export default function WelcomePage({user, handleLogout}) {
  return <><div>Welcome,  {user.username}!</div><div>You are now using cookies 🍪</div>
  <button onClick={handleLogout}>Log out</button></>
}