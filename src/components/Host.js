import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({image, id, selectHost}) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      // className="host selected"
      className="host"
      onClick={() => selectHost(id)}
      image={ image }
      raised
      link
    />
  );
}

export default Host;
