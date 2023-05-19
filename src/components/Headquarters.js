import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel"

function Headquarters() {

  const [hosts, setHosts] = useState([])

  useEffect( ()=>{
    fetch("http://localhost:3001/hosts" )
    .then( r => r.json() )
    .then( d => setHosts(d) )
  },[])
    

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage hosts = {hosts}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
