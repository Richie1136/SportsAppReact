import { useState, useEffect } from 'react'
import { baseurlPlayer, APIKEY } from '../../api/Api'
import Card from '../card/Card'


const Player = () => {
  let result = `${baseurlPlayer}/Players?key=${APIKEY}`

  const [getdetails, setDetails] = useState()

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const response = await fetch(result)
        let data = await response.json()
        let playerInfo = data?.map((item) => item)
        console.log(playerInfo)
        setDetails(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPlayerDetails()
  }, [])

  let active = getdetails?.filter((status) => status.Status === 'Active' && status.Team === 'ARI')
  // let team = getdetails?.map((team) => team.Team)
  // setDetails(active)

  console.log(active)

  

  return (
    <div style={{ 'display': 'flex', 'flexWrap': 'wrap' }}>
      {getdetails?.map(({ PhotoUrl, PlayerID, active, FirstName, LastName, Status }) => (
        <>
          <Card >
            <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
              <img src={PhotoUrl} />
              <h4>{FirstName} {LastName}</h4>
              {active}
            </div>
          </Card>
        </>
      ))}
    </div>
  )
}

export default Player




// const Player = () => {

//   let result = `${baseurlPlayer}/Players?key=${APIKEY}`

//   const [getdetails, setDetails] = useState()

//   useEffect(() => {
//     const getPlayerDetails = async () => {
//       try {
//         const response = await fetch(result)
//         let data = await response.json()
//         let playerInfo = data?.map((item) => item)
//         console.log(playerInfo)
//         setDetails(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getPlayerDetails()
//   }, [])

//   let active = getdetails?.filter((status) => status.Status === 'Active').map((team) => team.Team)
//   // let team = getdetails?.map((team) => team.Team)
//   // setDetails(active)

//   console.log(active)


//   return (
//     <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
//       {getdetails?.map(({ PhotoUrl, PlayerID, active, FirstName, LastName }) => (
//         <>
//           <img src={PhotoUrl} />
//           <h4>{FirstName} {LastName}</h4>
//           {PlayerID}
//           {active}
//         </>
//       ))}
//     </div>
//   )
// }

// export default PlayerDetails