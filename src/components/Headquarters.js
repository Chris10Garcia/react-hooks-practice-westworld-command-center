import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel"

function Headquarters({hosts, selectedHost, selectHost }) {

  const coldHosts = hosts.filter(host => !host.active)


  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage selectHost = {selectHost} hosts = {coldHosts}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details selectedHost = {selectedHost}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
