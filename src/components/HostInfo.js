import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";
import { Log } from "../services/Log"

function HostInfo({selectedHost, areaList, hosts, updateProperty, setLogs, logs}) {
  const {firstName, active, gender, imageUrl, area, id} = selectedHost

  const optionsList = areaList.map( location => {
    return {key: location.name, text: location.nameFormatted, value: location.name}
  })

  const [options] = useState(optionsList);

  function handleOptionChange(e, { value }) {
    const areaLimit = areaList.find( area => area.name === value).limit
    const currentHostInArea = hosts.filter( host => host.area === value).length

    const valueCorrected = value.split("_").map( word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
    if (currentHostInArea + 1 > areaLimit){
      setLogs([Log.error(`Too many hosts. Cannot add ${firstName} to ${valueCorrected}`), ...logs])
    } else {
      updateProperty("area", value, selectedHost.id)
      setLogs([Log.notify(`${firstName} set in area ${valueCorrected}`), ...logs])
    }
  }


function handleRadioChange(){

  if (active){
    setLogs([Log.notify(`Decommisioned ${firstName}`), ...logs])
  } else {
    setLogs([Log.warn(`Activated ${firstName}`), ...logs])
  }

  updateProperty("active", !active, id)
  

}


  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} | {gender==="Male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleRadioChange }
                label={active ? "Active" : "Decommissioned"}
                checked={active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
