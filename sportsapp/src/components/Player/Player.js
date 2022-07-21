import { useState, useEffect } from 'react'
import { baseurlPlayer, APIKEY } from '../../api/Api'
import Card from '../card/Card'
import './Player.css'
import Loading from '../loading/Loading'


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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const response = await fetch(result)
        let data = await response.json()
        let playerInfo = data?.map((item) => item.Team)
        setDetails(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getPlayerDetails()
  }, [])

  if (loading) return <Loading />



  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  // let mapovrtletters = letters.map((letter) => console.log(letter))

  let filterByLast = getdetails?.filter((status) => status.LastName.toLowerCase().startsWith('a')).filter((role) => role.Status === 'Active')




  // let filterLastName = letters.forEach((letter) => filteredLast[letter] = getdetails?.filter((status) => status.LastName.toLowerCase().startsWith(letter)))

  let filteredLast = {
    a: getdetails?.filter((status) => status.LastName.toLowerCase().startsWith('a')),
    b: getdetails?.filter((status) => status.LastName.toLowerCase().startsWith('b')),
    c: getdetails?.filter((status) => status.LastName.toLowerCase().startsWith('c')),
    d: getdetails?.filter((status) => status.LastName.toLowerCase().startsWith('d')),
    e: getdetails?.filter((status) => status.LastName.toLowerCase().startsWith('e')),
    f: getdetails?.filter((status) => status.LastName.toLowerCase().startsWith('f')),
    g: getdetails?.filter((status) => status.LastName.toLowerCase().startsWith('g')),
  }

  // console.log(getdetails?.filter((status) => status.LastName.toLowerCase().startsWith(mapovrtletters)))

  let filterLastName = letters.forEach((letter) => filteredLast[letter] = getdetails?.filter((status) => status.LastName.toLowerCase().startsWith(letter)))
  console.log(filterByLast)

  return (
    <div>
      {filterByLast?.map(({ PhotoUrl, PlayerID, active, FirstName, LastName, Team }) => (
        <div key={PlayerID}>
          <div className='player-links'>
            <ul className='player-list'>
              <li className='item'>
                <a className='player-link' href={`/player/${PlayerID}`}>{FirstName} {LastName}</a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Player