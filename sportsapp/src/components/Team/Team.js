// import React from 'react'
// import axios from 'axios'
// import teamJson from '../../data.json'
import teams from '../../teams.json'
import { useState, useEffect } from 'react'
import Card from '../card/Card'

// console.log(teams.queryResults.row.name)

const Team = () => {


  return (
    <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
      {teams?.queryResults.row.map(({ website_url, logo, name_display_full, address_line1, address_city, address_state, address_zip, phone_number }) => (
        <Card>
          <div style={{ 'textAlign': 'center', 'width': '230px', 'marginLeft': '12px' }} key={name_display_full}>
            <h2><a style={{ 'textDecoration': 'none', 'color': 'black' }} href={`https://${website_url}`} target="_blank" rel='noreferrer'>{name_display_full}</a></h2>
            <img src={logo} alt='Team Logo' />
            <h4>{address_line1}, {address_city}, {address_state} {address_zip}</h4>
            <h6>{phone_number}</h6>
          </div>
        </Card>
      ))
      }
    </div >
  )
}

export default Team