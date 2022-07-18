import { useState, useEffect } from 'react'
import { baseurlPlayer, APIKEY } from '../../api/Api'
import Card from '../card/Card'


// const Player = () => {
//   let result = `${baseurlPlayer}/Players?key=${APIKEY}`

//   // let teams = getPlayers?.map((team) => team)
//   // let playerOfYeasm = `${baseurlPlayer}/Players/${teams}`


//   const [getPlayers, setGetPlayers] = useState()

//   useEffect(() => {
//     const getPlayerDetails = async () => {
//       try {
//         let teams = getPlayers?.map((team) => team)
//         let playerOfYeasm = `${baseurlPlayer}/Players/${teams}`
//         console.log(playerOfYeasm)
//         const response = await fetch(playerOfYeasm)
//         let data = await response.json()
//         let playerInfo = data?.map((item) => item)
//         console.log(playerInfo)
//         setGetPlayers(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getPlayerDetails()
//   }, [])


//   let active = getPlayers?.filter((status) => status.Status === 'Active' && status.Team === 'ARI')
//   // let team = getdetails?.map((team) => team.Team)
//   // setDetails(active)

//   console.log(active)

//   // console.log(getdetails?.map((team) => team.Team))


//   // console.log(playerOfYeasm)


//   return (
//     <div style={{ 'display': 'flex', 'flexWrap': 'wrap' }}>
//       {getPlayers?.map(({ PhotoUrl, PlayerID, active, FirstName, LastName, Status }) => (
//         <>
//           <Card >
//             <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }}>
//               <img src={PhotoUrl} />
//               <h4>{FirstName} {LastName}</h4>
//               {active}
//             </div>
//           </Card>
//         </>
//       ))}
//     </div>
//   )
// }

// export default Player




const Player = () => {

  let result = `${baseurlPlayer}/Players?key=${APIKEY}`

  const [getdetails, setDetails] = useState()

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const response = await fetch(result)
        let data = await response.json()
        let playerInfo = data?.map((item) => item.Team)
        console.log(playerInfo)
        console.log(data)
        setDetails(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPlayerDetails()
  }, [])


  let active = getdetails?.filter((status) => status.Tean === 'NYY')
  // let team = getdetails?.map((team) => team.Team)
  // setDetails(active)


  return (
    <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
      {getdetails?.map(({ PhotoUrl, PlayerID, active, FirstName, LastName, Team }) => (
        <>
          <img src={PhotoUrl} />
          <h4>{FirstName} {LastName}</h4>
          {Team}

        </>
      ))}
    </div>
  )
}

export default Player