import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap() {
  const [areaList, setAreaList] = useState([])

  useEffect( ()=> {
    fetch("http://localhost:3001/areas")
    .then ( r => r.json() )
    .then ( d => setAreaList(d) )
  } , [])

  const renderArea = areaList.map( area => {
    return(
      <Area key = {area.id} id = {area.id} name = {area.name} limit = {area.limit} auth_req = {area.auth_req} />
    )
  })

  return (
    <Segment id="map"> 
        { renderArea }
    </Segment>)
}

export default WestworldMap;
