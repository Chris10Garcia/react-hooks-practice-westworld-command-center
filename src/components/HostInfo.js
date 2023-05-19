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

function HostInfo({selectedHost, areaList, hosts, updateProperty}) {
  
  const {firstName, active, gender, imageUrl, area, id} = selectedHost

  const optionsList = areaList.map( location => {
    return {key: location.name, text: location.nameFormatted, value: location.name}
  })

  const [options] = useState(optionsList);

  function handleOptionChange(e, { value }) {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
    const areaLimit = areaList.find( area => area.name === value).limit
    const currentHostInArea = hosts.filter( host => host.area === value).length

    if (currentHostInArea + 1 > areaLimit){
      console.log("error, you reached your limit")
    } else {
      console.log(value)
      updateProperty("area", value, selectedHost.id)
    }
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
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={ () => updateProperty("active", !active, id) }
                label={"Active"}
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
