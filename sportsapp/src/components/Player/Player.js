import { useState, useEffect } from 'react'
import { baseurlPlayer, APIKEY } from '../../api/Api'
import Card from '../card/Card'
import './Player.css'
import Loading from '../loading/Loading'


const Player = () => {

  let result = `${baseurlPlayer}/Players?key=${APIKEY}`

  const [getdetails, setDetails] = useState()
  const [lastNae, setLastName] = useState()
  const [loading, setLoading] = useState(true)

  let filteredLast = {
    A: getdetails?.filter((status) => status.LastName.startsWith('A')).map((item) => item),
    B: getdetails?.filter((status) => status.LastName.startsWith('B')).map((item) => item).filter((role) => role.Status === 'Active'),
    C: getdetails?.filter((status) => status.LastName.startsWith('C')).map((item) => item).filter((role) => role.Status === 'Active'),
    D: getdetails?.filter((status) => status.LastName.startsWith('D')).map((item) => item).filter((role) => role.Status === 'Active'),
    E: getdetails?.filter((status) => status.LastName.startsWith('E')),
    F: getdetails?.filter((status) => status.LastName.startsWith('F')),
    G: getdetails?.filter((status) => status.LastName.startsWith('G')),
  }

  // console.log(filteredLast.A)

  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const response = await fetch(result)
        let data = await response.json()
        let playerInfo = data?.map((item) => item.Team)
        setDetails(data)
        let filterLastName = letters.forEach((letter) => getdetails?.filter((status) => status.LastName.startsWith(letter)))
        // let results = letters?.forEach((letter) => filteredLast[letter])
        console.log(filterLastName)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getPlayerDetails()
  }, [])

  if (loading) return <Loading />

  console.log(Object.keys(filteredLast).forEach((letter) => console.log(letter.split(""))))


  let cherry = Object.keys(filteredLast).forEach((letter) => console.log(letter.split("").value))

  console.log(JSON.stringify(Object.keys(filteredLast)))

  // let mapovrtletters = letters.map((letter) => console.log(letter))

  let filterByLast = getdetails?.filter((status) => status.LastName.toLowerCase().startsWith('a')).filter((role) => role.Status === 'Active')

  console.log(filterByLast)



  // console.log(filterLastName)
  let A = getdetails?.filter((status) => status.LastName.startsWith('A')).map((item) => item.LastName)
  let B = getdetails?.filter((status) => status.LastName.startsWith('B')).map((item) => item.LastName)
  let C = getdetails?.filter((status) => status.LastName.startsWith('C'))
  let D = getdetails?.filter((status) => status.LastName.startsWith('D'))
  let E = getdetails?.filter((status) => status.LastName.startsWith('E'))
  let F = getdetails?.filter((status) => status.LastName.startsWith('F'))
  let G = getdetails?.filter((status) => status.LastName.startsWith('G'))

  let alpha = A
  // console.log(alpha.map((name) => name.split(",")))

  // let filteredLast2 = {
  //   A: getdetails?.filter((status) => status.LastName.startsWith('A')).map((item) => item),
  //   B: getdetails?.filter((status) => status.LastName.startsWith('B')),
  //   C: getdetails?.filter((status) => status.LastName.startsWith('C')),
  //   D: getdetails?.filter((status) => status.LastName.startsWith('D')),
  //   E: getdetails?.filter((status) => status.LastName.startsWith('E')),
  //   F: getdetails?.filter((status) => status.LastName.startsWith('F')),
  //   G: getdetails?.filter((status) => status.LastName.startsWith('G')),
  // }

  // let letters2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


  // letters2.forEach((letter) => console.log(filteredLast[letter]))


  // let results = getdetails?.filter((status) => status.LastName).letters2?.forEach((letter) => letter.LastName.startsWith(filteredLast2[letter]))
  // console.log(results)

  // let results = letters2?.forEach((letter) => letter.LastName.startsWith(filteredLast2[letter]).filter((role) => role.Status === 'Active'))
  // console.log(results)

  // console.log(filteredLast.A)

  let a = filteredLast.A
  // console.log(a.map((item) => console.log(item.LastName)))

  // console.log(JSON.parse(filteredLast))

  // console.log(filteredLast.A.map((item) => console.log(item.LastName)))

  // console.log(filteredLast)

  // console.log(filteredLast.map((key) => console.log(key.key)))

  // console.log(Object.entries(filteredLast?.map((item) => console.log(item[1]))))

  // let keys = Object.keys(filteredLast)
  // console.log(keys.map((letter) => console.log(letter)))

  // for (const [key, value] of filteredLast) {
  //   console.log(`${key}:${value}`);
  // }

  // let apple = filteredLast?.map((item) => item.LastName)
  // console.log(apple)

  // let last = Object.entries(filteredLast)
  // console.log(last[1].map((item) => console.log(item.Last)))

  // let filterLastName = letters.forEach((letter) => filteredLast[letter])


  return (
    <div>
      {/* {filteredLast} */}
      {/* {apple} */}

      {a.map(({ PlayerID, active, FirstName, LastName, Team }) => (
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
      {/* <div key={filteredLast.A.PlayerID}>
        <div className='player-links'>
          <ul className='player-list'>
            <li className='item'>
              <a className='player-link' href={`/player/${filteredLast.A.PlayerID}`}>{filteredLast.A.FirstName} {filteredLast.A.LastName}</a>
            </li>
          </ul>
        </div>
      </div> */}
      {/* {filteredLast?.FirstName} */}
    </div>
  )
}

export default Player