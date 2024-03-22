import React, { useState } from 'react';
import { useEffect } from 'react';
import { Option, Picklist } from 'react-rainbow-components';
import HorizontalCentered from '../layout/HorizontalCentered';
import MenuMultiChoice from './MenuMultiChoice';
import { territoryList } from '../../common/lang';
import ReactCountryFlag from 'react-country-flag';

export default function MenuTerritory({ eventPropositionList, handleTerritoryPropositions, children }) {

  const [eventTerritory, setEventTerritory] = useState();
  const [eventProposition, setEventProposition] = useState();
  const [eventTerritoryPropositions, setEventTerritoryPropositions] = useState();

  useEffect(() => {
  }, [])
  
  useEffect(() => {
    if(eventProposition) {
      const objTerritoryPropositions = JSON.parse(`{ "${eventTerritory.label}": "${eventProposition}", "children": "${children == 0 ? 0 : Number(children) + Number(1)}"  }` );
      setEventTerritoryPropositions(objTerritoryPropositions)
    }
  }, [eventTerritory, eventProposition]);
  

  useEffect(() => {
    if(eventTerritoryPropositions) {
      handleTerritoryPropositions(eventTerritoryPropositions)
    }
   
  }, [eventTerritoryPropositions]);

function handleSelect(data) {
  var aggregateProposition = data.map(function(item) {
       return  item['name'];
  });
  setEventProposition(aggregateProposition.join('; '))
}

  const containerTerritoryStyles = {
    width: 300,
    textAlign: "center",
    textAlignLast: 'center',
    padding: 0,
    margin:0
  };
 
  return  <HorizontalCentered spacing={0}>
  <Picklist
      label="Territory"
      placeholder="Territory"
      required
      onChange={value => setEventTerritory(value)}
      value={eventTerritory}

      options={territoryList}
      style={containerTerritoryStyles}
      className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
  >
      {territoryList.map(el => {
          return <Option key={el.value} name={el.value} label={el.value} icon={<ReactCountryFlag
            countryCode={el.value}
            svg
            style={{ width: '0.8em', height: '0.8em' }} />} />
      })}
  </Picklist>
  <MenuMultiChoice title="Propositions" rows={eventPropositionList} handleSelect={handleSelect} required style={{maxWidth: "335px", minWidth: "335px", marginTop:'2px'}} maxChildrenValue={children} disabled={eventTerritory ? false : true}/>
</HorizontalCentered>

}
