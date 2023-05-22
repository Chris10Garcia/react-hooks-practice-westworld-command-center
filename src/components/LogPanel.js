import React from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({hosts, updateProperty, setHosts, logs, setLogs}) {

  
  // function dummyLogs() {
  //   // This is just to show you how this should work. But where should the log data actually get stored?
  //   // And where should we be creating logs in the first place?
  //   // Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
  //   // Just remember to import it

  //   let logs = [];

  //   logs.unshift(Log.warn("This is an example of a warn log"));
  //   logs.unshift(Log.notify("This is an example of a notify log"));
  //   logs.unshift(Log.error("This is an example of an error log"));

  //   return logs;
  // }

  /*
    Log.warn("This is an example of a warn log"),
    Log.notify("This is an example of a notify log"),
    Log.error("This is an example of an error log"),

  */

  const activeHosts = hosts.filter(host => host.active)

  function updatePropertyFix (key, value, id){
    fetch(`http://localhost:3001/hosts/${id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json", "Accept" : "application/json"},
      body: JSON.stringify({[key]: value})
    })
    .then( r => r.json() )
  }


 function handleButton (e){

    if (e.target.innerText === "DECOMMISSION ALL") {

      activeHosts.forEach( host => {
        updatePropertyFix("active", !host.active, host.id)
      })

      const testData = hosts.map ( host => {
        host.active = host.active ? !host.active : host.active
        return host
      })

      setHosts(testData)

      const warn = Log.notify("Decommissioning all hosts!")
      setLogs([warn, ...logs])

    } else if ( e.target.innerText === "ACTIVATE ALL"){

      hosts.forEach( host => {
        updatePropertyFix("active", !host.active, host.id)
      })

      const testData = hosts.map ( host => {
        host.active = !host.active ? !host.active : host.active
        return host
      })

      setHosts(testData)

      const warn = Log.warn("Activating all hosts!")
      setLogs([warn, ...logs])
    }

  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>

      {/* Button below is the Activate All/Decommisssion All button */}
      {/* This isn't always going to be the same color...*/}
      {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
      { activeHosts.length > 0 
        ? <Button fluid color={"green"} content={"DECOMMISSION ALL"} onClick={handleButton}/>
        : <Button fluid color={"red"} content={"ACTIVATE ALL"} onClick={handleButton}/>
      }
      
    </Segment>
  );
}

export default LogPanel;
