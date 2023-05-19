import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel"

function Headquarters({hosts, selectedHost, selectHost, areaList, updateProperty, setHosts}) {


  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage selectHost = {selectHost} selectedHost = {selectedHost} hosts = {hosts}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details updateProperty={updateProperty} selectedHost = {selectedHost} areaList = {areaList} hosts = {hosts} />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel hosts = {hosts} updateProperty={updateProperty} setHosts = {setHosts}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
