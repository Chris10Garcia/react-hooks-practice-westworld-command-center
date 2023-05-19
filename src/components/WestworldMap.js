import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({hosts, areaList, selectHost}) {


  const renderArea = areaList.map( area => {
    const hostArea = hosts.filter( h => h.area === area.name)
    return(
      <Area key = {area.id} id = {area.id} name = {area.name} limit = {area.limit} hosts = {hostArea} selectHost = {selectHost}/>
    )
  })

  return (
    <Segment id="map"> 
        { renderArea }
    </Segment>)
}

export default WestworldMap;
