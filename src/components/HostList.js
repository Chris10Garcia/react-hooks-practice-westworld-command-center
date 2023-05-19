import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";


function HostList({hosts, selectedHost, selectHost}) {

  const renderHost = hosts.map( host => {
    return (
      <Host key = {host.id} image = {host.imageUrl} id = {host.id} selectedHost = {selectedHost} selectHost = {selectHost} />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>{renderHost}</Card.Group>
  );
}

export default HostList;
