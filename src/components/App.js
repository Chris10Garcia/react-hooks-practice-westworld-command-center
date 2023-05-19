import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";

import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"

function App() {

  const [hosts, setHosts] = useState([])
  const [areaList, setAreaList] = useState([])
  const [selectedHost, setSelectedHost] = useState()

  useEffect( ()=>{
    fetch("http://localhost:3001/hosts" )
    .then( r => r.json() )
    .then( d => setHosts(d) )

    fetch("http://localhost:3001/areas")
    .then ( r => r.json() )
    .then ( d => {

      const formattedData = d.map( area => {
          const nameCorrected = area.name.split("_").map( word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
          area["nameFormatted"] = nameCorrected
          return area                                 
        })
      setAreaList(formattedData) 
    })

  },[])

  function selectHost(id){
    setSelectedHost( hosts.find( host => host.id === id))
  }

  function updateList (obj){
    const updatedList = hosts.map( host => host.id === obj.id ? obj : host)
    setSelectedHost(obj)
    setHosts(updatedList)
    
  }

  function updateProperty (key, value, id){
    fetch(`http://localhost:3001/hosts/${id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json", "Accept" : "application/json"},
      body: JSON.stringify({[key]: value})
    })
    .then( r => r.json() )
    .then( d => updateList(d))
  }

  return (
    <Segment id="app">
      <WestworldMap hosts = {hosts} selectHost = {selectHost} selectedHost = {selectedHost} areaList = {areaList} />
      <Headquarters hosts = {hosts} selectHost = {selectHost} selectedHost = {selectedHost} areaList = {areaList} updateProperty={updateProperty} />
    </Segment>
  );
}

export default App;
