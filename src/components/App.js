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
    .then ( d => setAreaList(d) )
  },[])

  function selectHost(id){
    setSelectedHost( hosts.find( host => host.id === id))
  }


  return (
    <Segment id="app">
      <WestworldMap hosts = {hosts} selectHost = {selectHost} selectedHost = {selectedHost} areaList = {areaList} />
      <Headquarters hosts = {hosts} selectHost = {selectHost} selectedHost = {selectedHost} />
    </Segment>
  );
}

export default App;
