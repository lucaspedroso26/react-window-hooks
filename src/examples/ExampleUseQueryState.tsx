import React from 'react'
import useQueryState from '../hooks/useQueryState'

type ProfileT = {
  email: string
  avatar: string
}

const ExampleUseQueryState = () => {
  const [profile, setProfile] = useQueryState<ProfileT>('profile', {
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

export default ExampleUseQueryState
