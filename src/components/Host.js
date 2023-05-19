import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({image, id, selectHost, selectedHost}) {
  let className

  if (selectedHost){
    if (selectedHost.id === id) {
      className = "host selected"
    }
    else {
      className = "host"
    }

  } else {
    className = "host"
  }

  return (
    <Card
      className = {className}
      onClick={() => selectHost(id)}
      image={ image }
      raised
      link
    />
  );
}

export default Host;
