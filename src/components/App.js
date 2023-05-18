import React, { useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";

import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"

function App() {

  // Here we need state for the selected hosts

  return (
    <Segment id="app">
      <WestworldMap />
      <Headquarters />
    </Segment>
  );
}

export default App;
