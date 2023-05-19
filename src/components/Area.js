import React from "react";
import "../stylesheets/Area.css";
import Host from "./Host";
import { Card } from "semantic-ui-react";

function Area(props) {
  const { name, hosts, selectHost, selectedHost, nameFormatted } = props

  const activeHosts = hosts.filter(host => host.active === true)

  const renderActiveHosts = activeHosts.map(host => {
    return (
      <Host key = {host.id} image = {host.imageUrl} id = {host.id} selectHost = {selectHost} selectedHost = {selectedHost} />
          )
    })

  return (
    <div
      className="area"
      id={name}
    >
      <h3 className="labels">
        {nameFormatted}
      </h3>
      <Card.Group itemsPerRow={6}> {renderActiveHosts} </Card.Group>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
