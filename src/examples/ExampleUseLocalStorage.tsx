import React from 'react'
import useLocalStorageState from '../hooks/useLocalStorage'

type ProfileT = {
  email: string
  avatar: string
}

function ExampleUseLocalStorage() {
  const [profile, setProfile] = useLocalStorageState<ProfileT>('profile', {
    email: '',
    avatar: '',
  })

  return (
    <div>
      <h1> {profile.email} </h1>
      <img src={profile.avatar} />
    </div>
  )
}

export default ExampleUseLocalStorage
