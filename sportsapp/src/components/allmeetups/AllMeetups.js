import MeetupList from '../meetuplist/MeetupList'
import { useState, useEffect } from 'react'


const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://react-meetups-175c9-default-rtdb.firebaseio.com/meetups.json')
      .then(res => res.json())
      .then(data => {
        const meetups = []
        for (let key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup)
        }
        setIsLoading(false)
        setLoadedMeetups(meetups)
      })
  }, [])


  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  )
}

export default AllMeetupsPage